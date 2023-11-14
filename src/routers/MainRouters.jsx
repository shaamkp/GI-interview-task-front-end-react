import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppRouter />} />
    </Routes>
  );
};

export default MainRouters;
