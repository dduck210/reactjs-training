import { useEffect, useState } from "react";

function StudyUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
  clearTimeout(() => {
    setCount((count) => count - 1);
    console.log("Đã clear timeout");
  });
  return (
    <div className="text-center mt-5">
      <span className="text-danger">Thời gian còn {count} giây</span>
    </div>
  );
}

export default StudyUseEffect;
