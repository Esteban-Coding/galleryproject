import React from "react";
import bogota2 from "../images/bogota2.jpg";

const Bogota2 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img
        src={bogota2}
        alt="Paisaje de la capital colombiana, Bogotá D.C."
        className="image"
      />
    </div>
  );
};

export default Bogota2;
