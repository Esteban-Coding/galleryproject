import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bogota1 from "./components/Bogota1";
import Bogota2 from "./components/Bogota2";
import Bogota3 from "./components/Bogota3";
import Bogota4 from "./components/Bogota4";
import Bogota5 from "./components/Bogota5";
import Bogota6 from "./components/Bogota6";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 id="title" className="text-center my-3">
          Galería
        </h1>
      </div>
      <Routes>
        <Route path="/bogota1" element={<Bogota1 className="image-size" />} />
        <Route path="/bogota2" element={<Bogota2 className="image-size" />} />
        <Route path="/bogota3" element={<Bogota3 className="image-size" />} />
        <Route path="/bogota4" element={<Bogota4 className="image-size" />} />
        <Route path="/bogota5" element={<Bogota5 className="image-size" />} />
        <Route path="/bogota6" element={<Bogota6 className="image-size" />} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
