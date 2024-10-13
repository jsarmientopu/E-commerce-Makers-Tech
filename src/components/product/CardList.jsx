// ProductCard.jsx
import React, { useContext } from "react";
import { CartContext } from "../../App";
import Swal from "sweetalert2";

const ProductCardList = ({ product }) => {
  const { items, setItems } = useContext(CartContext);
  const addCart = () => {
    var updatedArray = [];
    var i;
    for (i = 0; i < items.length; i++) {
      updatedArray.push(items[i]);
    }
    product.units = 1;
    updatedArray.push(product);
    setItems(updatedArray);
    Swal.fire({
      title: "Added!",
      text: "Product added to the cart successfully",
      icon: "success",
    });
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform hover:scale-105 min-w-[20%]">
      <div className="text-center mb-3">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.brand}</p>
        <p className="text-sm text-purple-500">{product.category}</p>
      </div>
      <div className="h-40 bg-gray-100 flex justify-center items-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-purple-600">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700"
          onClick={addCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCardList;
