import React from "react";
import { Routes, Route, Navigate, Browser } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { me } from "../axios";
import { useQuery } from "@tanstack/react-query";
import Admin from "../pages/Admin";
import Transactions from "../pages/Transactions";
import Fleet from "../pages/Fleet";

const Routers = () => {
  const { isLoading, data } = useQuery(["me"], () =>
    me().then((res) => res.data)
  );
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
