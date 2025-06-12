// import logo from "./logo.svg";
import "./App.css";
// import Lesson2 from "./Lesson 2/ListExpenses";
import React, { useEffect, useState } from "react";
// import ListExpenses from "./Lesson 2/ListExpenses";
// import Hello from "./components/Hello";
// import ProductCard from "./components/ProductCard";

function App() {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Trà sữa matcha",
  //     price: 25000,
  //     image: "https://picsum.photos/200/300?random=1",
  //   },
  //   {
  //     id: 2,
  //     title: "Trà sữa cookie",
  //     price: 45000,
  //     image: "https://picsum.photos/200/300?random=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Trà sữa chân trâu",
  //     price: 10000,
  //     image: "https://picsum.photos/200/300?random=3",
  //   },
  //   {
  //     id: 4,
  //     title: "Trà sữa linh tinh",
  //     price: 14000,
  //     image: "https://picsum.photos/200/300?random=4",
  //   },
  // ];
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
      <TestCSS />
      <StudyUseEffect />
      <TestUseEffect />
      {/* <Counter /> */}
      <LogComponent />
      <ProductList />
      <Timer />
      <CompareNullVsState />
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

function TestCSS() {
  return (
    <div className="test-css">
      <div>
        <h5 className="">Start aligned text on all viewport sizes.</h5>
        <p className="text-right">Center aligned text on all viewport sizes.</p>
        <p className="text-end">End aligned text on all viewport sizes.</p>
        <p className="text-sm-end">
          End aligned text on viewports sized SM (small) or wider.
        </p>
        <p className="text-md-end">
          End aligned text on viewports sized MD (medium) or wider.
        </p>
        <p className="text-lg-end">
          End aligned text on viewports sized LG (large) or wider.
        </p>
        <p className="text-xl-end">
          End aligned text on viewports sized XL (extra large) or wider.
        </p>
        <p className="text-xxl-end">
          End aligned text on viewports sized XXL (extra extra large) or wider.
        </p>
      </div>
      {/* Attribute chỉnh màu button */}
      <div className="text-center">
        {/* Button basic */}
        <button type="button" className="btn">
          Button Basic
        </button>
        {/* Button primary màu xanh dương đậm */}
        <button type="button" className="btn btn-primary">
          Button Blue Đậm
        </button>
        {/* Button secondary màu xanh lá cây */}
        <button type="button" className="btn btn-success">
          Button Green
        </button>
        {/* Button info màu xanh dương nhạt */}
        <button type="button" className="btn btn-info">
          Button Blue Nhạt
        </button>
        {/* Button warning màu vàng */}
        <button type="button" className="btn btn-warning">
          Button Yellow
        </button>
        {/* Button danger màu đỏ */}
        <button type="button" className="btn btn-danger">
          Button Red
        </button>
        {/* Button dark màu đen */}
        <button type="button" className="btn btn-dark">
          Button Black
        </button>
        {/* Button light màu xám */}
        <button type="button" className="btn btn-light">
          Button Grey
        </button>
        {/* Button link màu xám nhưng mà sẽ gạch chân bên dưới vì là link */}
        <button type="button" className="btn btn-link">
          Button
        </button>
      </div>
      {/* Done attribute chỉnh màu button */}

      {/* Chỉnh kích cỡ button */}
      <div className="text-center mt-5">
        <button type="button" className="btn btn-info btn-lg">
          Large
        </button>
        <button type="button" className="btn btn-secondary">
          Default
        </button>
        <button type="button" className="btn btn-danger btn-sm">
          Small
        </button>
      </div>
      {/* Done chỉnh kích cỡ button */}
    </div>
  );
}

// Test useEffect
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

// Test setTimeout
// setTimeout(function () {
//   console.log("Timeout");
// }, 1000);

// // // Test setInterval
// setInterval(function () {
//   console.log("Interval");
// }, 1000);

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// test log useEffect
function LogComponent() {
  useEffect(() => {
    console.log("Log thành công");
  });
}

// test call api fake (fake api)
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // .then((products) => setProduct(products));
      .then((data) => {
        console.log("Data api: ", data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {/* {products.map((product) => {
        <li key={product.id}></li>;
      })} */}
    </div>
  );
}

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

// compare [] rỗng vs [] truyền state
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

export default App;
