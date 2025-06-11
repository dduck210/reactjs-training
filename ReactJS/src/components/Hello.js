import React from "react";

function Hello(props) {
  return (
    <div>
      <h2>Hello {props.ten}</h2>
      <p>Tuổi của Đức {props.tuoi}</p>
    </div>
  );
}

export default Hello;
