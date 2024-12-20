import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Grill from "./pages/Grill";
import Cafe from "./pages/Cafe";
import Catering from "./pages/Catering";
import Footer from "../src/Components/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/grill" element={<Grill />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/catering" element={<Catering />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
