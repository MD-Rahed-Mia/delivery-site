
import PopularItemCard from "./PopularItemCard";
import "./PopularItems.css"
import Biriyani from './../../../public/images/birinani2.jpg';

export default function OrderNow() {
  return (
    <>
      <div className="popular-items">
        <h1 className="pf-heading">Popular Foods</h1>
        <div className="popular-items__cards">
          <PopularItemCard img={Biriyani} title="Hyrabadi Biriyani with special masala." price="250" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempora blanditiis eaque nesciunt illum."/>
        </div>
      </div>
    </>
  );
}
