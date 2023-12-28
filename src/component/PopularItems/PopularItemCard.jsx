import { IoStar } from "react-icons/io5";

export default function PopularItemCard(props) {
  return (
    <>
      <div className="pi-card" pr_id={props.pr_id}>
        <img src={props.img} alt="" />
        <div className="pi-card__desc">
          <h2>{props.title}</h2>
          <div className="pr-reveiw">
            <h1>&#2547;{props.price}</h1>
            <div className="product-review">
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <IoStar fontSize="20px" color="orangered" />
              <div className="rating-count">
                4.5/5.
              </div>
            </div>
          </div>
          <p>{props.desc}</p>
        </div>
        <div className="pi-card__overlay">
          <button className="pi-card__btn">Order now</button>
        </div>
      </div>
    </>
  );
}
