import { Link } from "react-router-dom";
import mobiles from "./mobile_data";
import Mobilecard from "./Mobilecard";

const MobileGallery = () => {
  const mobileCardList = mobiles.map((mbl) => (
    <div className="col" key={mbl.id}>
      <Link
        style={{ textDecoration: "none" }}
        className="text-secondary"
        to={"detail/" + mbl.id}
      >
        <Mobilecard mobile={mbl} />
      </Link>
    </div>
  ));
  return <div className="row gap-3">{mobileCardList}</div>;
};

export default MobileGallery;
