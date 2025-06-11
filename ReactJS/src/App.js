import logo from "./logo.svg";
import "./App.css";
import Lesson2 from "./Lesson2";
import React from "react";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Lesson2 />
      <FunctionComponent />
      <ClassComponent />
      <ShowStaticData />
      {/* <ShowArrayData /> */}
    </div>
  );
}

// Test function component
function FunctionComponent() {
  return <h1>Test thử function component</h1>;
}

// Test class component
class ClassComponent extends React.Component {
  render() {
    return <h2>Test thử class component</h2>;
  }
}

// Test hiển thị ra dữ liệu tĩnh ở dạng chuỗi hoặc số
function ShowStaticData() {
  const title = "Heslo tôi đang học ReactJS";
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

// Test hiển thị ra dữ liệu ở dạng mảng hoặc object
// function ShowArrayData() {
//   const products = [
//     { id: 1, name: "Áo phông", price: 300000 },
//     { id: 2, name: "Quần dài", price: 200000 },
//   ];
//   console.log(products);
//   return (
//     <div>
//       {products.map((product) => {
//         <div>
//           id: {product.id}, name: {product.name}, price: {product.price}
//         </div>;
//       })}
//     </div>
//   );
// }

export default App;
