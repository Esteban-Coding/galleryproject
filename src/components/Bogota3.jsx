import React from "react";
import bogota3 from "../images/bogota3.jpg";

const Bogota3 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img
        src={bogota3}
        alt="Paisaje de la capital colombiana, Bogotá D.C."
        className="image"
      />
    </div>
  );
};

export default Bogota3;
