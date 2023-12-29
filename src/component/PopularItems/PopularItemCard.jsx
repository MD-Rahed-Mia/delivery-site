import { useState } from "react";
import { IoStar } from "react-icons/io5";

export default function PopularItemCard(props) {
  let [orderQuantity, setOrderQuanity] = useState(1);

  function increaseOrderQ() {
    setOrderQuanity((orderQuantity = orderQuantity + 1));
    console.log(orderQuantity);
  }

  function decreaseOrderQ(e) {
    if (orderQuantity == 1) {
      e.target.disabled = true;
    }
    setOrderQuanity((orderQuantity = orderQuantity - 1));
  }

  return (
    <>
      <div className="pi-card" pr_id={props.pr_id}>
        <img src={props.img} alt="" />
        <div className="pi-card__desc">
          <h2 className="pi-card__title">{props.title}</h2>
          <div className="pr-reveiw">
            <h1>&#2547;{props.price}</h1>
            <div className="product-review">
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <div className="rating-count">4.5/5.</div>
            </div>
          </div>
          <p>{props.desc}</p>
        </div>
        <div className="pi-card__overlay">
          <div className="pi-overlay__btn">
            <div className="pi-quantity">
              <button onClick={decreaseOrderQ}>-</button>
              <h1 className="pi-q__num">{orderQuantity}</h1>
              <button onClick={increaseOrderQ}>+</button>
            </div>
            <button className="pi-card__btn">order now</button>
            <button className="pi-card__btn">add to card</button>
          </div>
        </div>
      </div>
    </>
  );
}
