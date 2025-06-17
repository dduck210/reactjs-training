import { useState } from "react";

// Access data to form
function AccessDataToForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-3xl font-bold underlineborder-collapse border border-gray-400"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button className="btn btn-secondary" type="Submit">
        Submit
      </button>
    </form>
  );
}

export default AccessDataToForm;
