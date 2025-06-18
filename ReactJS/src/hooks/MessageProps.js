import { useState } from "react";

function MessageProps() {
  const [message, setMessage] = useState("Hello Đức");

  return (
    <div>
      <MessagePropsReceive message={message} />
      <button onClick={() => setMessage("Dữ liệu đã được làm mới rồi nè")}>
        Bấm vào đây để update data
      </button>
    </div>
  );
}

function MessagePropsReceive({ message }) {
  return <p>{message}</p>;
}

export default MessageProps;
