import React from "react";
import { Link } from "react-router-dom";
import Bogota1 from "./Bogota1";
import Bogota2 from "./Bogota2";
import Bogota3 from "./Bogota3";
import Bogota4 from "./Bogota4";
import Bogota5 from "./Bogota5";
import Bogota6 from "./Bogota6";

const Navigation = () => {
  return (
    <div>
      <div className="container mt-4 father">
        <Link to="/bogota1" className="links">
          <figure className="image-size">
            <Bogota1 />
            <figcaption>Bogota1</figcaption>
          </figure>
        </Link>
        <Link to="/bogota2" className="links">
          <figure className="image-size">
            <Bogota2 />
            <figcaption>Bogota2</figcaption>
          </figure>
        </Link>
        <Link to="/bogota3" className="links">
          <figure className="image-size">
            <Bogota3 />
            <figcaption>Bogota3</figcaption>
          </figure>
        </Link>
        <Link to="/bogota4" className="links">
          <figure className="image-size">
            <Bogota4 />
            <figcaption>Bogota4</figcaption>
          </figure>
        </Link>
        <Link to="/bogota5" className="links">
          <figure className="image-size">
            <Bogota5 />
            <figcaption>Bogota5</figcaption>
          </figure>
        </Link>
        <Link to="/bogota6" className="links">
          <figure className="image-size">
            <Bogota6 />
            <figcaption>Bogota6</figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
