import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Grill from "./pages/Grill";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grill" element={<Grill />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
