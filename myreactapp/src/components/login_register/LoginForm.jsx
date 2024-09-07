import React, { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  //event handler Username
  const handleUsernameChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  //event handler for Password
  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  //event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="un">
            Username
          </label>
          <input
            className="form-control"
            required
            id="un"
            type="text"
            value={user.username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="pw">
            Password
          </label>
          <input
            className="form-control"
            required
            id="pw"
            type="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-success m-3" type="submit">
            {" "}
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
