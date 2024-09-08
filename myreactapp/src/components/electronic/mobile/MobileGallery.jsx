import { Link } from "react-router-dom";
import mobiles from "./mobile_data";
import Mobilecard from "./Mobilecard";

const MobileGallery = () => {
  const mobileCardList = mobiles.map((mbl) => (
    <div className="col">
      <Link
        style={{ textDecoration: "none" }}
        className="text-secondary"
        to={"detail"}
      >
        <Mobilecard mobile={mbl} />
      </Link>
    </div>
  ));
  return <div className="row">{mobileCardList}</div>;
};

export default MobileGallery;
