import React from "react";

const SampleForm = () => {
  //event handler for form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control m-2" placeholder="Enter message" />
      <button className="btn btn-secondary m-2" type="submit">Submit</button>
    </form>
  );
};

export default SampleForm;
