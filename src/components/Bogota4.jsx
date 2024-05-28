import React from "react";
import bogota4 from "../images/bogota4.jpg";

const Bogota4 = ({ className }) => {
  return (
    <div className={`image-container ${className}`}>
      <img
        src={bogota4}
        alt="Paisaje de la capital colombiana, Bogotá D.C."
        className="image"
      />
    </div>
  );
};

export default Bogota4;
