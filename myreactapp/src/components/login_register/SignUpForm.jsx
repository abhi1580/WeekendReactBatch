import React, { useState } from "react";

const SignUpForm = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    age: "",
    gender: "",
    hobbies: [],
    contactNo: "",
    email: "",
    qualification:""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  //event handler to handle form submit event
  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    setIsSubmitted(true);
  };
  //event handler for reset form
  const reset = {
    ...profile,
    fullName: "",
    age: "",
    gender: "",
    hobbies: [],
    contactNo: "",
    email: "",
    qualification:""
  };
  const handleReset = () => {
    setProfile(reset);
  };

  //event handler to handle hobbies
  const handleHobbiesChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setProfile({ ...profile, hobbies: [...profile.hobbies, value] });
    } else {
      setProfile({
        ...profile,
        hobbies: profile.hobbies.filter((item) => item !== value),
      });
    }
  };
  return (
    <div>
      {!isSubmitted && (
        <div>
          <h4 className="text-center">Profile Form</h4>
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="fn"
                placeholder="Full Name"
                value={profile.fullName}
                required
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
                min={18}
                max={60}
                placeholder="Age"
                required
                value={profile.age}
                onChange={(e) =>
                  setProfile({ ...profile, age: e.target.value })
                }
              />
            </div>
            <div className="form-check">
              <input
                required
                className="form-check-input"
                id="g1"
                type="radio"
                name="gender"
                value="Male"
                onClick={() => {
                  profile.gender = "Male";
                }}
              />
              <label htmlFor="g1">Male</label>
            </div>
            <div className="form-check">
              <label htmlFor="g2">Female</label>
              <input
                className="form-check-input"
                id="g2"
                type="radio"
                name="gender"
                value="Female"
                required
                onClick={() => {
                  profile.gender = "Female";
                }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Hobbies</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hb1"
                  name="hobbies"
                  value="Singing"
                  checked={profile.hobbies.includes("Singing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label" htmlFor="hb1">
                  Singing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hb2"
                  name="hobbies"
                  value="Dancing"
                  checked={profile.hobbies.includes("Dancing")}
                  onChange={handleHobbiesChange}
                />
                <label className="form-label" htmlFor="hb2">
                  Dancing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="hb3"
                  name="hobbies"
                  value="Travelling"
                  checked={profile.hobbies.includes("Travelling")}
                  onChange={handleHobbiesChange}
                />
                <label htmlFor="hb3">Travelling</label>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="cn">
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="cn"
                  required
                  value={profile.contactNo}
                  pattern="[0-9]{10}"
                  placeholder="Contact no"
                  onChange={(e) =>
                    setProfile({ ...profile, contactNo: e.target.value })
                  }
                />
              </div>
              <div>
                <input className="form-control" type="email" id="email" value={profile.email}
                 placeholder="Email" onChange={(e)=>{setProfile({...profile,email:e.target.value})}} />
              </div>
              <div className="mb-3 ">
              <label className="form-label" htmlFor="qu">
                Educational Qualification:
              </label>
              <select data-live-search="true"
                required
                className="form-select"
                value={profile.qualification}
                onChange={(e) => {
                  setProfile({ ...profile, qualification: e.target.value });
                }}
              >
                <option value="">Select Qualification</option>
                <option value="B.S.C"> B.S.C</option>
                <option value="B.C.A">B.C.A</option>
                <option value="B.COM">B.COM</option>
                <option value="M.S.C">M.S.C</option>
                <option value="M.C.A">M.C.A</option>
                <option value="M.COM">M.COM</option>
              </select>
            </div>
            </div>
            <div className="mb-3 text-center">
              <button className="btn btn-outline-success m-2" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline-danger m-2"
                onClick={handleReset}
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div>
          <h2 className="text-center">Profile Details</h2>
          <h4>Full Name : {profile.fullName}</h4>
          <h4>Age : {profile.age}</h4>
          <h4>Gender : {profile.gender}</h4>
          <h4>Hobbies :</h4>
          <ul>
            {profile.hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h4>Contact No : {profile.contactNo}</h4>
          <h4>Email : {profile.email}</h4>
          <h4>Eualification : {profile.qualification}</h4>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsSubmitted(false);
              handleReset();
            }}
          >
            Back to form
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
