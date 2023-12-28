import PopularItemCard from "./PopularItemCard";
import "./PopularItems.css";
import Biriyani from "./../../../public/images/birinani2.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function OrderNow() {
  return (
    <>
      <div className="popular-items">
        <h1 className="pf-heading">Popular Foods</h1>
        <div className="popular-items__cards">
          <PopularItemCard
            img={Biriyani}
            title="Hyrabadi Biriyani with special masala."
            price="250"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempora blanditiis eaque nesciunt illum."
            pr_id="1"
          />
          <PopularItemCard
            img={Biriyani}
            title="Hyrabadi Biriyani with special masala."
            price="250"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempora blanditiis eaque nesciunt illum."
            pr_id="1"
          />
          <PopularItemCard
            img={Biriyani}
            title="Hyrabadi Biriyani with special masala."
            price="250"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempora blanditiis eaque nesciunt illum."
            pr_id="1"
          />
          <PopularItemCard
            img={Biriyani}
            title="Hyrabadi Biriyani with special masala."
            price="250"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempora blanditiis eaque nesciunt illum."
            pr_id="1"
          />
          <PopularItemCard
            img={Biriyani}
            title="Hyrabadi Biriyani with special masala."
            price="250"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempora blanditiis eaque nesciunt illum."
            pr_id="1"
          />
          <PopularItemCard
            img={Biriyani}
            title="Hyrabadi Biriyani with special masala."
            price="250"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempora blanditiis eaque nesciunt illum."
            pr_id="1"
          />
        </div>

        <Pagination />
      </div>
    </>
  );
}


function Pagination(){
  return (<>
    <div className="pi-pagination">
      <ul>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li><FaArrowRight /></li>
      </ul>
    </div>
  </>)
}