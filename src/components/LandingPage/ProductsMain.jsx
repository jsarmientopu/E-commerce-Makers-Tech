import React, { useContext } from "react";
import ProductCard from "../product/card";
import { CartContext } from "../../App";
const featuredProducts = [
  {
    id: 1,
    name: "Smartphone",
    brand: "TechBrand",
    description: "A high-end smartphone with a sleek design.",
    price: 799.99,
    stock: 25,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Headphones",
    brand: "SoundMax",
    description: "Noise-canceling over-ear headphones.",
    price: 199.99,
    stock: 50,
    category: "Audio",
  },
  {
    id: 3,
    name: "Running Shoes",
    brand: "RunFast",
    description: "Lightweight running shoes for daily wear.",
    price: 89.99,
    stock: 30,
    category: "Footwear",
  },
  {
    id: 1,
    name: "Smartphone",
    brand: "TechBrand",
    description: "A high-end smartphone with a sleek design.",
    price: 799.99,
    stock: 25,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Headphones",
    brand: "SoundMax",
    description: "Noise-canceling over-ear headphones.",
    price: 199.99,
    stock: 50,
    category: "Audio",
  },
  {
    id: 3,
    name: "Running Shoes",
    brand: "RunFast",
    description: "Lightweight running shoes for daily wear.",
    price: 89.99,
    stock: 30,
    category: "Footwear",
  },
];

const FeaturedProducts = () => {
  const { items, setItems } = useContext(CartContext);
  return (
    <div className="py-10 px-10 bg-gray-100 min-h-full ">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Featured Products
      </h2>
      <div className="flex flex-row flex-wrap gap-10 justify-center overflow-auto py-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
