import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import BookDetails from "./pages/BookDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/book-details/:isbn" element={<BookDetails />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
