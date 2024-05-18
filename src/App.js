import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bogota1 from "./components/Bogota1";
import Bogota2 from "./components/Bogota2";
import Bogota3 from "./components/Bogota3";
import Bogota4 from "./components/Bogota4";
import Bogota5 from "./components/Bogota5";
import Bogota6 from "./components/Bogota6";
import Bogota7 from "./components/Bogota7";
import Bogota8 from "./components/Bogota8";
import Bogota9 from "./components/Bogota9";
import Bogota10 from "./components/Bogota10";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bogota1" element={<Bogota1 />} />
        <Route path="/bogota2" element={<Bogota2 />} />
        <Route path="/bogota3" element={<Bogota3 />} />
        <Route path="/bogota4" element={<Bogota4 />} />
        <Route path="/bogota5" element={<Bogota5 />} />
        <Route path="/bogota6" element={<Bogota6 />} />
        <Route path="/bogota7" element={<Bogota7 />} />
        <Route path="/bogota8" element={<Bogota8 />} />
        <Route path="/bogota9" element={<Bogota9 />} />
        <Route path="/bogota10" element={<Bogota10 />} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
