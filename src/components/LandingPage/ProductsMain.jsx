import React from "react";
import ProductCard from "../product/card";
const featuredProducts = [
  {
    ProductID: 1,
    Name: "Smartphone",
    Brand: "TechBrand",
    Description: "A high-end smartphone with a sleek design.",
    Price: 799.99,
    Stock: 25,
    Category: "Electronics",
  },
  {
    ProductID: 2,
    Name: "Headphones",
    Brand: "SoundMax",
    Description: "Noise-canceling over-ear headphones.",
    Price: 199.99,
    Stock: 50,
    Category: "Audio",
  },
  {
    ProductID: 3,
    Name: "Running Shoes",
    Brand: "RunFast",
    Description: "Lightweight running shoes for daily wear.",
    Price: 89.99,
    Stock: 30,
    Category: "Footwear",
  },
  {
    ProductID: 1,
    Name: "Smartphone",
    Brand: "TechBrand",
    Description: "A high-end smartphone with a sleek design.",
    Price: 799.99,
    Stock: 25,
    Category: "Electronics",
  },
  {
    ProductID: 2,
    Name: "Headphones",
    Brand: "SoundMax",
    Description: "Noise-canceling over-ear headphones.",
    Price: 199.99,
    Stock: 50,
    Category: "Audio",
  },
  {
    ProductID: 3,
    Name: "Running Shoes",
    Brand: "RunFast",
    Description: "Lightweight running shoes for daily wear.",
    Price: 89.99,
    Stock: 30,
    Category: "Footwear",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="py-10 px-10 bg-gray-100 min-h-full ">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Featured Products
      </h2>
      <div className="flex flex-row flex-wrap gap-10 justify-center overflow-auto py-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.ProductID} product={product} />
        ))}
      </div>
    </div>
  );
}
