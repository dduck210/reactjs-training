// import logo from "./logo.svg";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import TestUseLocation from "./hooks/TestUseLocation";
import Responsive from "./components/Responsive/Responsive";
import HoverFocusActice from "./components/Interactive Effect/HoverFocusActive";
import UserListFetch from "./components/UserListFetch";
import UserListAxios from "./components/UserListAxios";
// import { Routes, Route, BrowserRouter } from "react-router";
// import About from "./components/About";
// import Home from "./components/Home";
// import HomeButton from "./components/HomeButton";
// import Lesson2 from "./Lesson 2/ListExpenses";
// import FunctionComponent from "./components/FunctionComponent";
// import ClassComponent from "./components/ClassComponent";
// import ShowStaticData from "./components/ShowStaticData";
// import ShowArrayData from "./components/ShowArrayData";
// import StudyUseEffect from "./hooks/useState & useEffect/StudyUseEffect";
// import TestUseEffect from "./hooks/useState & useEffect/TestUseEffect";
// import LogComponent from "./hooks/useState & useEffect/LogComponent";
// import HamCount from "./hooks/useState & useEffect/HamCount";
// import MessageProps from "./hooks/useState & useEffect/MessageProps";
// import TestCSS from "./components/TestCSS";
// import ProductList from "./components/ProductList";
// import Timer from "./components/Timer";
// import CompareNullVsState from "./hooks/useState & useEffect/CompareNullVsState";
// import OnClick from "./components/Lesson 5/OnClick";
// import OnSubmit from "./components/Lesson 5/OnSubmit";
// import AccessDataToForm from "./components/Lesson 5/AccessDataToForm";
// import BuildForm from "./components/Lesson 5/InputForm";
// import InputForm from "./components/Lesson 5/InputForm";
// import TextariaForm from "./components/Lesson 5/TextariaForm";
// import TestTrimInput from "./components/Lesson 5/TestTrimInput";
// import ClearFormInput from "./components/Lesson 5/ClearFormInput";
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
    <div>
      {/* <FunctionComponent />
      <ClassComponent />
      <ShowStaticData />
      <ShowArrayData /> */}

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
      {/* <HamCount />
      <MessageProps />
      <TestCSS />
      <StudyUseEffect />
      <TestUseEffect />
      <Counter />
      <LogComponent />
      <ProductList />
      <Timer />
      <CompareNullVsState /> */}
      {/* <OnClick /> */}
      {/* <OnSubmit /> */}
      {/* <AccessDataToForm />
      <InputForm />
      <TextariaForm />
      <TestTrimInput />
      <ClearFormInput /> */}
      {/* <HomeButton /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test-fetch" element={<UserListFetch />} />
          <Route path="/test-use-location" element={<TestUseLocation />} />
          <Route path="/test-axios" element={<UserListAxios />} />
        </Routes>
      </BrowserRouter>
      <Responsive />
      <HoverFocusActice />
    </div>
  );
}

export default App;
