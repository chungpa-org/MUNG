import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Pathfinding from "../pages/Pathfinding";
import Home from "../pages/Home";
import DistanceCalculator from "../pages/DistanceCalculator";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
        </Routes>
        <Routes>
            <Route exact path="/distance" element={<DistanceCalculator/>} />
        </Routes>
        <Routes>
            <Route exact path="/pathfinding" element={<Pathfinding/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
