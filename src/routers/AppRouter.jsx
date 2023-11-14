import React from "react";
import { Route, Routes } from "react-router-dom";
import Cover from "../components/screens/Cover";
import NotesSinglePage from "../components/screens/notes/NotesSinglePage";

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<NotesSinglePage />} /> */}
      <Route path="/">
        <Route path="" element={<Cover />} />
        <Route path=":id" element={<NotesSinglePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
