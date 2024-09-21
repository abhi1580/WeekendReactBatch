import { useNavigate, useParams } from "react-router-dom";
import mobiles from "./mobile_data";
import { useContext } from "react";
import { ShopContext } from "../../../App";

const MobileDetails = () => {
  const { mobile_id } = useParams();
  const navigate = useNavigate();
  const converted_id = parseFloat(mobile_id);
  const { addToCart } = useContext(ShopContext);
  const mobileObj = mobiles.find((mbl) => mbl.id === converted_id);

  return (
    <div className="container py-5">
      {/* Mobile Details Card */}
      <div className="card mb-4 shadow-lg">
        <div className="row g-0">
          {/* Image Section */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={mobileObj.image}
              alt={mobileObj.model}
              className="img-fluid rounded-start"
              style={{ height: "400px", objectFit: "contain" }}
            />
          </div>
          {/* Details Section */}
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{mobileObj.brand}</h2>
              <h4 className="card-subtitle mb-3">{mobileObj.model}</h4>
              <h3 className="text-success">
                &#8377; {mobileObj.price.toFixed(2)}
              </h3>
              <button
                className="btn btn-success mt-3"
                onClick={() => {
                  addToCart(mobileObj);
                  alert("Item added to cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Specification Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3>Specification Details</h3>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Primary Camera:</th>
                <td>{mobileObj.specification.camera.primary_camera}</td>
              </tr>
              <tr>
                <th>Front Camera:</th>
                <td>{mobileObj.specification.camera.front_camera}</td>
              </tr>
              <tr>
                <th>Storage:</th>
                <td>{mobileObj.specification.storage}</td>
              </tr>
              <tr>
                <th>RAM:</th>
                <td>{mobileObj.specification.ram}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center">
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
