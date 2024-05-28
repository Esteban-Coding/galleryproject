import React from "react";
import bogota1 from "../images/bogota1.jpg";

const Bogota1 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img
        src={bogota1}
        alt="Paisaje de la capital colombiana, Bogotá D.C."
        className="image"
      />
    </div>
  );
};

export default Bogota1;
