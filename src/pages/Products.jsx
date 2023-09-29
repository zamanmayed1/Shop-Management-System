import React, { useState, useEffect } from "react";
import ProductCard from "../components/cards/ProductCard";
import axios from "axios";
import Spinner from "../components/Spinner";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    axios
      .get("https://api.npoint.io/8ee79be4963f272aa04d")
      .then(function (response) {
        setProductsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  useEffect(() => {
    // Filter products based on searchQuery
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Update the filtered products
    setFilteredProducts(filtered);
  }, [searchQuery, productsData]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Products: {filteredProducts.length}
          </p>
          <input
            type="text"
            placeholder="Search Products"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? ( // Render the spinner when loading is true
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
