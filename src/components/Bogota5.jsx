import React from "react";
import bogota5 from "../images/bogota5.jpg";

const Bogota5 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img
        src={bogota5}
        alt="Paisaje de la capital colombiana, Bogotá D.C."
        className="image"
      />
    </div>
  );
};

export default Bogota5;
