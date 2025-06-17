import { useEffect, useState } from "react";

// compare [] rỗng vs [] truyền state + test luôn bắt sự kiện onChange
function CompareNullVsState() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("[] rỗng chỉ chạy 1 lần");
  }, []); // [] mảng rỗng
  useEffect(() => {
    console.log("Name mới: ", name);
  }, [name]);
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      {/* <button className="btn btn-success">Submit</button> */}
    </div>
  );
}

export default CompareNullVsState;
