// import logo from "./logo.svg";
import "./App.css";
// import Lesson2 from "./Lesson 2/ListExpenses";
import React, { useState } from "react";
// import ListExpenses from "./Lesson 2/ListExpenses";
import Hello from "./components/Hello";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      title: "Trà sữa matcha",
      price: 25000,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Trà sữa cookie",
      price: 45000,
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "Trà sữa chân trâu",
      price: 10000,
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "Trà sữa linh tinh",
      price: 14000,
      image: "https://picsum.photos/200/300?random=4",
    },
  ];
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
      {/* <Lesson2 /> */}
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <ShowStaticData /> */}
      {/* <ShowArrayData /> */}

      {/* Test truyền props */}
      {/* <Hello ten="Dương Đức" tuoi={21} />
      <Hello ten="Đức Dương" tuoi={22} />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))} */}
      {/* <NameCard className="name-card" id="alice" /> */}
      <HamCount />
      <MessageProps />
    </div>
  );
}

// Test function component
// function FunctionComponent() {
//   return <h1>Test thử function component</h1>;
// }

// // Test class component
// class ClassComponent extends React.Component {
//   render() {
//     return <h2>Test thử class component</h2>;
//   }
// }

// // Test hiển thị ra dữ liệu tĩnh ở dạng chuỗi hoặc số
// function ShowStaticData() {
//   const title = "Heslo tôi đang học ReactJS";
//   return (
//     <div>
//       <h3>{title}</h3>
//     </div>
//   );
// }

// // Test hiển thị ra dữ liệu ở dạng mảng hoặc object
// function ShowArrayData() {
//   const products = [
//     { id: 1, name: "Áo phông", price: 300000 },
//     { id: 2, name: "Quần dài", price: 200000 },
//   ];
//   console.log(products);
//   return (
//     <div>
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           image={product.image}
//           title={product.title}
//           price={product.price}
//         />
//       ))}
//     </div>
//   );
// }

// const NameCard = (props) => {
//   return (
//     <div className={props.className}>
//       <div id={props.id}>Name: Alice</div>
//     </div>
//   );
// };

// Cách sử dụng useState
function HamCount() {
  const [count, setCount] = useState(0);

  const hamTang = () => {
    setCount((count) => count + 1);
  };

  const hamGiam = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={hamTang}>Click tăng</button>
      <button onClick={hamGiam}>Click giảm</button>
    </div>
  );
}

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
export default App;
