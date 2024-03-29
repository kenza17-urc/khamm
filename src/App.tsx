import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Layout/Navbar";
import Home from "./page/Home";
import Form from "./page/Form"

import { RecetteProvider } from "./lib/contexts/recetteContext";
import DetailRecette from "./page/DetailRecette";
import "./App.css";
const App = () => {
  return (
    <RecetteProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recette" element={<Form />} />
          <Route path="/recette/:id" element={<DetailRecette />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </RecetteProvider>
  );
};

export default App;
