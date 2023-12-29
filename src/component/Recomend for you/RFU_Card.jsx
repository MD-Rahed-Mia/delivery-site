import { useState } from "react";
import "./RecomendFU.css";

export default function RFUCard(props) {
  let [rfuQ, setrfuQ] = useState(1);

  function handleIncrease() {
    setrfuQ((rfuQ = rfuQ + 1));
  }
  function handleDecrease(e) {
    if(rfuQ == 1){
      e.target.disabled = true
    }
    setrfuQ((rfuQ = rfuQ - 1));
  }

  return (
    <>
      <div className="rfu-card">
        <img src={props.img} alt="" />
        <h4 className="rfu-card__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.
        </h4>
        <h2>&#2547;120</h2>
        <div className="rfu-card__Q">
          <button onClick={handleDecrease}>-</button>
          <p>{rfuQ}</p>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="rfu-card__btn">
          <button>add to card</button>
          <button>order now</button>
        </div>
      </div>
    </>
  );
}
