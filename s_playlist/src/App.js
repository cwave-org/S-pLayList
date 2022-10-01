import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChartNBTI from "./pages/ChartNBTI";
import React from "react";
import Communication from "./pages/Communication";
import MyAlbum from "./pages/MyAlbum";
import TasteTest from "./pages/TasteTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chartnbti" element={<ChartNBTI/>}></Route>
        <Route path="/communication" element={<Communication/>}></Route>
        <Route path="/myalbum" element={<MyAlbum/>}></Route>
        <Route path="/tastetest" element={<TasteTest/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
