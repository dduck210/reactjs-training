import { useEffect, useState } from "react";

function TestUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  });
  return (
    <div className="text-center mt-5">
      <span className="text-danger">Thời gian còn {count} giây</span>
    </div>
  );
}

export default TestUseEffect;
