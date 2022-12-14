import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChartNBTI from "./pages/ChartNBTI";
import React from "react";
import Communication from "./pages/Communication";
import MyAlbum from "./pages/MyAlbum";
import TasteTest from "./pages/TasteTest";
import TasteTestQue from "./pages/TasteTestQue";
import TasteTestEnd from "./pages/TasteTestEnd";
import BuyingDetail from "./pages/BuyingDetail";
import "./style/style.css";


function App({ pageId }) {
  return (
        <Routes>
          <Route path="/3" element={<ChartNBTI/>}></Route>
          <Route path="/4" element={<Communication/>}></Route>
          <Route path="/1" element={<MyAlbum/>}></Route>
          <Route path="/2" element={<TasteTest/>}></Route>
          <Route path="/tastetestque" element={<TasteTestQue pageId={pageId}/>}></Route>
          <Route path="/tastetestend" element={<TasteTestEnd/>}></Route>
          <Route path="/detail" element={<BuyingDetail/>}></Route>
        </Routes>
  );
}

export default App;
