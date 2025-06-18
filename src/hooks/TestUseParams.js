import { useParams } from "react-router-dom";

function TestUseParams() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default TestUseParams;
