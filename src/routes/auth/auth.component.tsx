import SignInForm from "components/sign-in-form/sign-in-form.components";
import SignUpForm from "components/sign-up-form/sign-up-form.component";

import "./auth.style.scss"


const Auth = () => {

  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Auth