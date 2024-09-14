import { useNavigate, useParams } from "react-router-dom";
import mobiles from "./mobile_data";

const MobileDetails = () => {
  const { mobile_id } = useParams();
  const navigate = useNavigate();
  const converted_id = parseFloat(mobile_id);
  const mobileObj = mobiles.find((mbl) => mbl.id === converted_id);
  return (
    <div className="d-flex flex-column p3">
      <div className="d-flex border justify-content-evenly p-3">
        <h2>Brand: {mobileObj.brand}</h2>
        <div>
          <img src={mobileObj.image} alt="model" style={{ height: "400px" }} />
        </div>
        <div className="d-flexflex-column justify-content-center">
          <h2>Model: {mobileObj.model}</h2>
          <h2>Price: &#8377;{mobileObj.price}</h2>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>

      <div className="d-flex">
        <h2>Specification Details:</h2>
        <table className="table table-bordered">
          <tr>
            <tr>
              <th>Primary Camera:</th>
              <td>{mobileObj.specification.camera.primary_camera}</td>
            </tr>
            <tr>
              <th>Front Camera:</th>
              <td> {mobileObj.specification.camera.front_camera}</td>
            </tr>
            <tr>
              <th>Storage</th>
              <td>{mobileObj.specification.storage}</td>
            </tr>
            <tr>
              <th>RAM Camera:</th>
              <td>{mobileObj.specification.ram}</td>
            </tr>
          </tr>
        </table>
      </div>
      <div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/electronic/mobile")}
        >
          Back to Gallery
        </button>
      </div>
    </div>
  );
};

export default MobileDetails;
