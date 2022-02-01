import { signInWithRedirect } from "@firebase/auth"
import { auth, provider } from "../firebase.js"

function SignIn() {
  function signInWithGoogle() {
    signInWithRedirect(auth, provider)
  }
  return (
    <div>
      <button className="btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn
