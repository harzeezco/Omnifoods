import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/Firebase/Firebase-utils";
import SignUp from "../../components/SignUp/SignUp-component";

const SignIn = () => {
  // Function that sign in user with google pop-up
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  //Effect for getting the redirection result
  useEffect(() => {
    return async () => {
      const { user } = await getRedirectResult(auth);
    };
  }, []);

  return (
    <div>
      Sign In Page
      <button onClick={logGoogleUser}>Sign in Google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in Google Redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
