import React, { useState } from "react";

const SignUpForm = () => {
  const [profile, setProfile] = useState({ fullName: "", age: "", gender: "" });

  //event handler to handle form submit event
  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted")
  };
  return (
    <div>
      <div style={{justifyItems:"center"}}>
        <h2>Profile Form</h2>
        <form onSubmit={handlerSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              id="fn"
              placeholder="Full Name"
              value={profile.fullName}
              onChange={(e) =>
                setProfile({ ...profile, fullName: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="number"
              id="age"
              placeholder="Age"
              value={profile.age}
              onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-outline-success m-3" type="submit">
              Submit
            </button>
            <button className="btn btn-outline-danger m-3" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
