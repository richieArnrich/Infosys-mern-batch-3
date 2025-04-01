import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Bookings from "./Bookings";
import Login from "./Login";
import BookPage from "./BookPage";
function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
