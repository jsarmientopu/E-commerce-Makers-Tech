// ProductListWithPagination.jsx
import React, { useState, useEffect } from "react";
import ProductCardList from "./CardList";
import products from "../../Products/products";

const ProductListWithPagination = () => {
  const [productss, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Set how many products per page

  useEffect(() => {
    // Fetch or set product data
    // const fetchProducts = async () => {
    //   const response = await fetch("/api/products");
    //   const data = await response.json();
    //   setProducts(data);
    // };
    // fetchProducts();
    setProducts(products);
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productss.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container max-h-screen overflow-auto py-8 no-scrollbar">
      <div className="flex flex-row flex-wrap gap-10 justify-center pb-4">
        {currentProducts.map((productss) => (
          <ProductCardList key={productss.id} product={productss} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="h-28">
        <div className="flex justify-center">
          {[...Array(Math.ceil(productss.length / productsPerPage)).keys()].map(
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
