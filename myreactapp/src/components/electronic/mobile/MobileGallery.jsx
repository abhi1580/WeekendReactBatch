import { Link } from "react-router-dom";
import mobiles from "./mobile_data";
import Mobilecard from "./Mobilecard";

const MobileGallery = () => {
  const mobileCardList = mobiles.map((mbl) => (
    <div
      className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center"
      key={mbl.id}
    >
      <Link
        style={{ textDecoration: "none" }}
        className="text-dark"
        to={"detail/" + mbl.id}
      >
        <Mobilecard mobile={mbl} />
      </Link>
    </div>
  ));

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Mobile Gallery</h2>
      <div className="row g-4">{mobileCardList}</div>
    </div>
  );
};

export default MobileGallery;
