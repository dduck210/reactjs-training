import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("Count: ");
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      // console.log("Clean: ");
      clearInterval(interval);
    };
  }, []);
  return <div className="text-center mt-5">Count: {count}</div>;
}

export default Timer;
