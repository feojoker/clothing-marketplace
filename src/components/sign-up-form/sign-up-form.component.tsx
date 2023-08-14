import FormInput from "components/form-input/form-input.component";
import { useState } from "react"
import { getErrorMessage } from "utils/error/error.utils";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "utils/firebase/firebase.utils";
import Button from 'components/button/button.component';
import './sign-up-form.style.scss'
import React from "react";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields;

  const [error, setError] = useState({
    displayNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  })

  const { displayNameError, emailError, passwordError, confirmPasswordError } = error

  const validateInput = (event: React.FocusEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setError(prev => {
      const newErrorObject = { ...prev, [name]: "" };

      switch (name) {
        case "displayName":
          if (!value) {
            newErrorObject.displayNameError = "Please enter Username.";
          }
          break;
        case "email":
          if (!value) {
            newErrorObject.emailError = "Please enter email.";
          }
          break;
        case "password":
          if (!value) {
            newErrorObject.passwordError = "Please enter Password.";
          } else if (formFields.confirmPassword && value !== formFields.confirmPassword) {
            newErrorObject.confirmPasswordError = "Password and Confirm Password does not match.";
          } else {
            newErrorObject.confirmPasswordError = formFields.confirmPassword ? "" : error.confirmPasswordError;
          }
          break;

        case "confirmPassword":
          if (!value) {
            newErrorObject.confirmPasswordError = "Please enter Confirm Password.";
          } else if (formFields.password && value !== formFields.password) {
            newErrorObject.confirmPasswordError = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return newErrorObject;
    });
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();

    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert("Cannot create user, email already in use")
      }
      console.log("error creating the user", getErrorMessage(error))
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
    validateInput(event as React.FocusEvent<HTMLInputElement>);
  }
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          errorMessage={displayNameError}
          inputOptions={{
            name: "displayName",
            type: "text",
            value: displayName,
            onChange: handleChange,
            onBlur: validateInput,
            required: true,
          }}
        />
        <FormInput
          label={"Email"}
          errorMessage={emailError}
          inputOptions={{
            name: "email",
            type: "email",
            value: email,
            onChange: handleChange,
            onBlur: validateInput,
            required: true,
          }}
        />
        <FormInput
          label={"Password"}
          errorMessage={passwordError}
          inputOptions={{
            name: "password",
            type: "password",
            value: password,
            onChange: handleChange,
            onBlur: validateInput,
            required: true,
            minLength: 6,
          }}
        />
        <FormInput
          label={"Confirm password"}
          errorMessage={confirmPasswordError}
          inputOptions={{
            name: "confirmPassword",
            type: "password",
            value: confirmPassword,
            onChange: handleChange,
            onBlur: validateInput,
            required: true,
            minLength: 6,
          }}
        />
        <Button
          type="submit"
          disabled={formFields.password !== formFields.confirmPassword}
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm
