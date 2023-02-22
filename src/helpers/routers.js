import React from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./url";
import Home from "../pages/Home";

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default routers;
