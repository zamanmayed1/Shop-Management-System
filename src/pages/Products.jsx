import React, {  useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import { productsData } from "../signals/productSignals";

const Products = () => {
  

  // Step 1: Initialize state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData.value);

  // Step 2: Create a function to update the search query state
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Step 3: Use the filter method to filter products
    const filtered = productsData.value.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };
  

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Products: {filteredProducts.length}
          </p>
          {/* Step 4: Use the searchQuery state */}
          <input
            type="text"
            placeholder="Search Products"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          // console.log(product),
          <ProductCard key={product.slug}   product={product} />
          // <h1 key={product.slug}>{product.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Products;
