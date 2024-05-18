import React from "react";
import { Link } from "react-router-dom";
import Bogota1 from "./Bogota1";
import Bogota2 from "./Bogota2";
import Bogota3 from "./Bogota3";
import Bogota4 from "./Bogota4";
import Bogota5 from "./Bogota5";
import Bogota6 from "./Bogota6";
import Bogota7 from "./Bogota7";
import Bogota8 from "./Bogota8";
import Bogota9 from "./Bogota9";
import Bogota10 from "./Bogota10";

const Navigation = () => {
  return (
    <div>
      <Link to="/bogota1">
        <figure>
          <Bogota1 />
          <figcaption>Bogota1</figcaption>
        </figure>
      </Link>
      <Link to="/bogota2">
        <figure>
          <Bogota2 />
          <figcaption>Bogota2</figcaption>
        </figure>
      </Link>
      <Link to="/bogota3">
        <figure>
          <Bogota3 />
          <figcaption>Bogota3</figcaption>
        </figure>
      </Link>
      <Link to="/bogota4">
        <figure>
          <Bogota4 />
          <figcaption>Bogota4</figcaption>
        </figure>
      </Link>
      <Link to="/bogota5">
        <figure>
          <Bogota5 />
          <figcaption>Bogota5</figcaption>
        </figure>
      </Link>
      <Link to="/bogota6">
        <figure>
          <Bogota6 />
          <figcaption>Bogota6</figcaption>
        </figure>
      </Link>
      <Link to="/bogota7">
        <figure>
          <Bogota7 />
          <figcaption>Bogota7</figcaption>
        </figure>
      </Link>
      <Link to="/bogota8">
        <figure>
          <Bogota8 />
          <figcaption>Bogota8</figcaption>
        </figure>
      </Link>
      <Link to="/bogota9">
        <figure>
          <Bogota9 />
          <figcaption>Bogota9</figcaption>
        </figure>
      </Link>
      <Link to="/bogota10">
        <figure>
          <Bogota10 />
          <figcaption>Bogota10</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navigation;
