import React from "react";

const categories = [
  { name: "Electronics", image: "/images/electronics.jpg" },
  { name: "Apparel", image: "/images/apparel.jpg" },
  { name: "Footwear", image: "/images/footwear.jpg" },
];

const Categories = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Shop by Category
      </h2>
      <div className="flex justify-center space-x-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-60 h-60 rounded-lg overflow-hidden shadow-lg relative"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h3 className="text-white font-bold text-lg">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
