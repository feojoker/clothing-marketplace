import FormInput from "components/form-input/form-input.component";
import { useEffect, useState } from "react"
import { getErrorMessage } from "utils/error/error.utils";
import { auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthWithEmailAndPassword, signInWithGoogleRedirect } from "utils/firebase/firebase.utils";
import Button from 'components/button/button.component';
import './sign-in-form.style.scss'
import { getRedirectResult } from "firebase/auth";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) createUserDocumentFromAuth(response.user)
    })()
  }, [])


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password)
      // await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();

    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert("Cannot log in, user not found");
          break
        case 'auth/wrong-password':
          alert("Cannot log in, wrong password");
          break
        default:
          console.log("Error logging the user", getErrorMessage(error))
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          inputOptions={{
            name: "email",
            type: "email",
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label={"Password"}
          inputOptions={{
            name: "password",
            type: "password",
            value: password,
            onChange: handleChange,
            required: true,
            minLength: 6,
          }}
        />
        <div className="sign-in-container__buttons-container">
          <Button
            type="submit"
          >
            Sign In
          </Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogleRedirect}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm