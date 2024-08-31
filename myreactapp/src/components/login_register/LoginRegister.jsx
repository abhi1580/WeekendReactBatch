import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginRegister = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <div className=" container w-75 d-flex flex-column gap-3 border rounded p-4 mt-3">
      <div>{isNewUser ? <SignUpForm /> : <LoginForm />}</div>
      <div>
        <h5>
          {isNewUser ? "Already a user?" : "Not a User? "}&nbsp; Please
          <button className="btn btn-link" onClick={() => setIsNewUser(!isNewUser)}>
            {isNewUser?"Login":"Register"}
          </button>
        </h5>
      </div>
    </div>
  );
};

export default LoginRegister;
