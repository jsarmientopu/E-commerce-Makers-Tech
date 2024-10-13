import React, { useContext } from "react";
import FloatingChat from "../chat/Chat";
import FeaturedProducts from "./ProductsMain";
import HeroSection from "./MainSection";
import Categories from "./CategoriasMain";
import Footer from "../navbar/Footer";
import { CartContext } from "../../App";
const LandingPage = () => {
  const { items, setItems } = useContext(CartContext);
  return (
    <div className="h-screen overflow-auto no-scrollbar">
      <main className=" min-h-full">
        <HeroSection />
        <FeaturedProducts />
        <Categories />
      </main>
      <FloatingChat />
      <Footer />
    </div>
  );
};

export default LandingPage;
