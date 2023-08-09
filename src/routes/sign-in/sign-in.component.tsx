import SignUpForm from "components/sign-up-form/sign-up-form.component";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { auth, createUserDocumentFromAuth, signInWithGoogleRedirect } from "utils/firebase/firebase.utils";



const SignIn = () => {

  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) createUserDocumentFromAuth(response.user)
    })()
  }, [])

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redrect
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn