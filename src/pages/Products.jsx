import React, {  useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const Products = () => {
  const productsData = [
    {
      id: 1,
      name: "Premium Leather Backpack",
      buyPrice: 79.99,
      salePrice: 99.99,
      stock: 50,
      category: "Bags",
    },
    {
      id: 2,
      name: "Wireless Noise-Canceling Headphones",
      buyPrice: 149.99,
      salePrice: 199.99,
      stock: 30,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      buyPrice: 19.99,
      salePrice: 29.99,
      stock: 60,
      category: "Clothing",
    },
    {
      id: 4,
      name: "Smartphone Stand and Charger",
      buyPrice: 24.99,
      salePrice: 34.99,
      stock: 45,
      category: "Accessories",
    },
    {
      id: 5,
      name: "Professional DSLR Camera",
      buyPrice: 799.99,
      salePrice: 999.99,
      stock: 15,
      category: "Electronics",
    },
    {
      id: 6,
      name: "Gourmet Coffee Beans (1 lb)",
      buyPrice: 9.99,
      salePrice: 14.99,
      stock: 75,
      category: "Food & Beverages",
    },
    {
      id: 7,
      name: "Laptop Backpack with USB Charging Port",
      buyPrice: 49.99,
      salePrice: 59.99,
      stock: 40,
      category: "Bags",
    },
    {
      id: 8,
      name: "Classic Men's Leather Shoes",
      buyPrice: 69.99,
      salePrice: 89.99,
      stock: 20,
      category: "Footwear",
    },
    {
      id: 9,
      name: "Stainless Steel Water Bottle (20 oz)",
      buyPrice: 14.99,
      salePrice: 19.99,
      stock: 55,
      category: "Accessories",
    },
    {
      id: 10,
      name: "Designer Sunglasses",
      buyPrice: 79.99,
      salePrice: 119.99,
      stock: 10,
      category: "Accessories",
    },
  ];



  // Step 1: Initialize state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Step 2: Create a function to update the search query state
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Step 3: Use the filter method to filter products
    const filtered = productsData.filter((product) =>
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
          <div
            key={product.id}
            className="bg-white cursor-pointer p-4 border flex flex-col justify-between transition duration-200 transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">ID: {product.id}</p>
            <p className="text-gray-700">Category: {product.category}</p>
            <p className="text-gray-700">
              Buy Price:{" "}
              <span className="text-black">${product.buyPrice.toFixed(2)}</span>
            </p>
            <p className="text-gray-700">
              Sale Price:{" "}
              <span className="text-black">
                ${product.salePrice.toFixed(2)}
              </span>
            </p>
            <p className="text-gray-700">Stock: {product.stock}</p>

            <div className="mt-4 flex items-center space-x-4 border-t pt-2">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <FaEye className="mr-1" /> View
              </button>
              <button className="flex items-center text-green-600 hover:text-green-800">
                <FaEdit className="mr-1" /> Edit
              </button>
              <button className="flex items-center text-red-600 hover:text-red-800">
                <FaTrash className="mr-1" /> Delete
              </button>
            </div>
            <img
              className="opacity-10 w-12 absolute right-0 bottom-0"
              src="https://img.icons8.com/?size=256&id=12091&format=png"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
