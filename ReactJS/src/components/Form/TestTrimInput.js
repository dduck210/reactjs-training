// test method trim() xoá khoảng trắng đầu cuối đối với input
import { useState } from "react";

function TestTrimInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value.trim());
  };

  return (
    <div className="mt-5">
      {/* <input type="text" value={inputValue} onChange={handleInputChange} />;
      <label for="exampleInputPassword1" class="form-label">
        Password
      </label> */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
        id="exampleInputPassword1"
      ></input>
    </div>
  );
}

export default TestTrimInput;
