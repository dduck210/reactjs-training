import { useEffect, useState } from "react";

function HamCount() {
  const [count, setCount] = useState(0);

  const hamTang = () => {
    setCount((count) => count + 1);
  };

  const hamGiam = () => {
    setCount((count) => count - 1);
  };
  // setInterval(() => {
  //   setCount((count) => count + 1);
  // }, 1000);

  useEffect(() => {
    const time = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    clearTimeout(time);
  });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   clearInterval(timer);
  // });

  return (
    <div>
      <h5 className="text-center text-danger bg-black">Count123: {count}</h5>
      <div className="text-center">
        <button className="btn btn-success btn-sm" onClick={hamTang}>
          Click tăng
        </button>
        <button className="btn btn-danger btn-sm" onClick={hamGiam}>
          Click giảm
        </button>
      </div>
    </div>
  );
}

export default HamCount;
