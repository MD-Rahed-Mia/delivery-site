import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero.jsx";
import OrderNow from "./component/PopularItems/PopularItems.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OrderNow />
    </>
  );
}

export default App;
