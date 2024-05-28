import React from "react";
import bogota6 from "../images/bogota6.jpg";

const Bogota6 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img
        src={bogota6}
        alt="Paisaje de la capital colombiana, Bogotá D.C."
        className="image"
      />
    </div>
  );
};

export default Bogota6;
