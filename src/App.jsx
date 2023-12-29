import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero.jsx";
import OrderNow from "./component/PopularItems/PopularItems.jsx";
import RecomendFU from "./component/Recomend for you/RecomendFU.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OrderNow />

      <RecomendFU />
    </>
  );
}

export default App;
