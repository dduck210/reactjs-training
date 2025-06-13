import { useState } from "react";

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="InputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="InputEmail1"
          placeholder="Vui lòng nhập vào email của bạn..."
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="InputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="InputPassword1"
          placeholder="Vui lòng nhập vào password của bạn..."
          required
        />
      </div>
      {/* <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          required
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default InputForm;
