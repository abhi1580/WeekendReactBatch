import React from "react";

const Mobilecard = ({ mobile }) => {
  return (
    <div
      className="card m-3 shadow-sm border-0"
      style={{
        width: "18rem",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img
        className="card-img-top"
        src={mobile.image}
        alt={mobile.model}
        style={{
          height: "380px",
          objectFit: "cover",
        }}
      />
      <div className="card-body text-center">
        <h4 className="card-title mb-2">
          {mobile.brand} {mobile.model}
        </h4>
        <h5 className="card-subtitle text-muted mb-2">
          &#8377; {mobile.price.toFixed(2)}
        </h5>
        <button className="btn btn-primary btn-sm">View Details</button>
      </div>
    </div>
  );
};

export default Mobilecard;
