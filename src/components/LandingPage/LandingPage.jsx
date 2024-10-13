import React from "react";
import FloatingChat from "../chat/Chat";
import FeaturedProducts from "./ProductsMain";
import HeroSection from "./MainSection";
import Categories from "./CategoriasMain";
import Footer from "../navbar/Footer";

const LandingPage = () => {
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
