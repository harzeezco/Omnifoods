import { useState } from "react";
import "./SignUp.styles.scss";

import {
  createUserAuthWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/Firebase/Firebase-utils";

const inputFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [inputState, setInputState] = useState(inputFields);
  const { displayName, email, confirmPassword, password } = inputState;

  const resetFormFields = () => setInputState(inputFields);
  console.log(inputState);
  const onformSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Your password do not match");
      return;
    }

    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
      const userDoc = await createUserDocFromAuth(user, { displayName });
      console.log(userDoc);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Email already in use");

      console.log("error signing up user", error.message);
    }

    resetFormFields();
  };

  const onFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputState({ ...inputState, [name]: value });
  };

  return (
    <form className="sign-up">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          required
          name="displayName"
          id="username"
          value={displayName}
          onChange={onFormChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          name="email"
          id="email"
          onChange={onFormChange}
          type="email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={onFormChange}
          type="password"
          required
          name="password"
          id="password"
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={onFormChange}
          type="password"
          required
          name="confirmPassword"
          id="confirm-password"
        />
      </div>
      <button onClick={onformSubmit} type="submit" className="">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
