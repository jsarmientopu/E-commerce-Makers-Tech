// ProductListWithPagination.jsx
import React, { useState, useEffect } from "react";
import ProductCardList from "./CardList";
// import products from "../../Products/products";
import { getAllRecomendedProducts } from "../../utils/products";
import { Typography } from "@mui/material";

const ProductListWithPagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [productsPerPage] = useState(12); // Set how many products per page

  useEffect(() => {
    getAllRecomendedProducts(setProducts, setLoading);
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center bg-white">
        <Typography
          variant="h4"
          className="text-center text-purple-600"
          sx={{ fontWeight: "bold" }}
        >
          Loading products...
        </Typography>
      </div>
    );
  }

  if (!loading && products.length <= 0) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center bg-white">
        <Typography
          variant="h3"
          className="text-center text-purple-600"
          sx={{ fontWeight: "bold" }}
        >
          Nothing to see
        </Typography>
      </div>
    );
  }

  return (
    <div className="container max-h-screen overflow-auto py-8 no-scrollbar">
      <div className="flex flex-row flex-wrap gap-10 justify-center pb-4">
        {currentProducts.map((products) => (
          <ProductCardList key={products.productId} product={products} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="h-28">
        <div className="flex justify-center">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(
            (num) => (
              <button
                key={num}
                onClick={() => paginate(num + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === num + 1
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200"
                } rounded`}
              >
                {num + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListWithPagination;
