import "./RecomendFU.css";
import Varaities from "./../../../public/images/varaities.jpg";
import RFUCard from "./RFU_Card";

export default function RecomendFU() {
  return (
    <>
      <div className="rfu-container">
        <RFU_Header />

        <div className="rfu-cards">
          <RFUCard img={Varaities} />
          <RFUCard img={Varaities} />
          <RFUCard img={Varaities} />
          <RFUCard img={Varaities} />
          <RFUCard img={Varaities} />
        </div>
      </div>
    </>
  );
}

function RFU_Header() {
  return (
    <>
      <div className="rfu-header">
        <h1>Recomend for you</h1>
        <div className="rfu-tabs">
          <ul>
            <li className="active">best offer</li>
            <li>new arrival</li>
            <li>top rated</li>
            <li>featured</li>
          </ul>
        </div>
      </div>
    </>
  );
}
