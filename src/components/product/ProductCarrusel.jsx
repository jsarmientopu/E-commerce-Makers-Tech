import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import ProductCard from "./card";

export default function ProductCarousel() {
  const products = [
    {
      title: "T-Shirt",
      price: "$19.99",
      stock: 50,
      description: "100% cotton, great for casual outings.",
    },
    {
      title: "Hoodie",
      price: "$49.99",
      stock: 20,
      description: "Warm and comfortable, perfect for cold days.",
    },
    {
      title: "Jeans",
      price: "$39.99",
      stock: 30,
      description: "Slim fit, durable, and stylish for everyday wear.",
    },
    {
      title: "Sneakers",
      price: "$79.99",
      stock: 10,
      description: "Comfortable and stylish sneakers.",
    },
    {
      title: "Jacket",
      price: "$99.99",
      stock: 15,
      description: "Warm, waterproof jacket for outdoor activities.",
    },
    {
      title: "Jeans",
      price: "$39.99",
      stock: 30,
      description: "Slim fit, durable, and stylish for everyday wear.",
    },
    {
      title: "Sneakers",
      price: "$79.99",
      stock: 10,
      description: "Comfortable and stylish sneakers.",
    },
    {
      title: "Jacket",
      price: "$99.99",
      stock: 15,
      description: "Warm, waterproof jacket for outdoor activities.",
    },
  ];

  return (
    <div className="w-full max-w-full mx-auto mt-6">
      <div className="flex overflow-x-auto space-x-4 p-2 no-scrollbar">
        {/* Flex container for carousel */}
        <div className="flex space-x-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              stock={product.stock}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
