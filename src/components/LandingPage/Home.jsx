import React from "react";
import Navbar from "../navbar/Navbar";
import { useAuth } from "../../Auth/AuthContext";
import FloatingChat from "../chat/Chat";
import ProductCard from "../product/card";
import ProductCarousel from "../product/ProductCarrusel";

const Home = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />;{children}
    </div>
  );
};

export default Home;
