// import { useState } from "react";

// Cách sử dụng basic
function OnSubmit() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("Form oke k có vde gì");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control-sm mt-5 mb-3" type="text" />
      <button className="btn btn-secondary" type="Submit">
        Submit
      </button>
    </form>
  );
}

export default OnSubmit;
