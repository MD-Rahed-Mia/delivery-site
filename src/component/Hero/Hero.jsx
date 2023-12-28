import "./Hero.css";
import DeliveryVan from './../../../public/images/delivery-truck.png';
export default function Hero() {
  return (
    <>
      <div className="hero">

        <div className="hero-left">
            <div className="hero-left_content">
              <h1>Fastest delivery & <br />Relevent price</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quos qui, labore iure modi facere necessitatibus dicta ipsa? Fugiat <br /> beatae asperiores pariatur at. Asperiores repellat, sapiente et eum dolor <br /> praesentium eveniet enim quos maiores nesciunt corrupti.

              </p>
              <button className="explore-more__btn fade">explore more</button>
            </div>
        </div>
        <div className="hero-right ">
            <img src={DeliveryVan} alt="" />
        </div>
      </div>
    </>
  );
}
