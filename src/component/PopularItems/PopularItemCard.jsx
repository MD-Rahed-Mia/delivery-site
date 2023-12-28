export default function PopularItemCard(props) {
  return (
    <>
      <div className="pi-card">
        <img src={props.img} alt="" />
        <div className="pi-card__desc">
          <h2>{props.title}</h2>
          <h1>&#2547;{props.price}</h1>
          <p>{props.desc}</p>
        </div>
        <div className="pi-card__overlay">
          <button className="pi-card__btn">Order now</button>
        </div>
      </div>
    </>
  );
}
