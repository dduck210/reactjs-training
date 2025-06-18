import { useState } from "react";

function ClearFormInput() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          className="form-control"
          id="text"
          placeholder="Vui lòng nhập vào text của bạn..."
          required
        />
        <button className="btn btn-dark btn-lg">Submit</button>
      </form>
    </div>
  );
}

export default ClearFormInput;
