import { useLocation } from "react-router-dom";

function TestUseLocation() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2>Pathname: {location.pathname}</h2>
      <p>Pathname: {location.search}</p>
      <h2>Pathname: {location.hash}</h2>
    </div>
  );
}

export default TestUseLocation;
