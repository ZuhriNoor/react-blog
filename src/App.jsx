import React from "react";
import Home from "./Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}
