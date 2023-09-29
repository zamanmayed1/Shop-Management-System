import React, { useState } from 'react';
import CategoryCard from '../components/cards/CategoryCard';

const Categories = () => {
  const categoriesData = [
    {
      "name": "Electronics",
      "slug": "electronics",
      "totalProduct": "10",
      "totalPrice": "149",
      "note": "<p>All&nbsp; Electronics <strong>products</strong></p>"
    },
    {
      "name": "Clothing",
      "slug": "clothing",
      "totalProduct": "20",
      "totalPrice": "299",
      "note": "<p>All&nbsp; Clothing <strong>products</strong></p>"
    },
    {
      "name": "Furniture",
      "slug": "furniture",
      "totalProduct": "15",
      "totalPrice": "499",
      "note": "<p>All&nbsp; Furniture <strong>products</strong></p>"
    },
    {
      "name": "Books",
      "slug": "books",
      "totalProduct": "30",
      "totalPrice": "199",
      "note": "<p>All&nbsp; Books <strong>products</strong></p>"
    },
    {
      "name": "Toys",
      "slug": "toys",
      "totalProduct": "25",
      "totalPrice": "99",
      "note": "<p>All&nbsp; Toys <strong>products</strong></p>"
    },
    {
      "name": "Sports Equipment",
      "slug": "sports-equipment",
      "totalProduct": "18",
      "totalPrice": "349",
      "note": "<p>All&nbsp; Sports Equipment <strong>products</strong></p>"
    },
    {
      "name": "Home Decor",
      "slug": "home-decor",
      "totalProduct": "22",
      "totalPrice": "199",
      "note": "<p>All&nbsp; Home Decor <strong>products</strong></p>"
    },
    {
      "name": "Beauty Products",
      "slug": "beauty-products",
      "totalProduct": "12",
      "totalPrice": "129",
      "note": "<p>All&nbsp; Beauty Products <strong>products</strong></p>"
    },
    {
      "name": "Kitchen Appliances",
      "slug": "kitchen-appliances",
      "totalProduct": "15",
      "totalPrice": "249",
      "note": "<p>All&nbsp; Kitchen Appliances <strong>products</strong></p>"
    },
    {
      "name": "Garden Supplies",
      "slug": "garden-supplies",
      "totalProduct": "14",
      "totalPrice": "199",
      "note": "<p>All&nbsp; Garden Supplies <strong>products</strong></p>"
    },
    {
      "name": "Jewelry",
      "slug": "jewelry",
      "totalProduct": "8",
      "totalPrice": "399",
      "note": "<p>All&nbsp; Jewelry <strong>products</strong></p>"
    },
    {
      "name": "Pet Supplies",
      "slug": "pet-supplies",
      "totalProduct": "20",
      "totalPrice": "99",
      "note": "<p>All&nbsp; Pet Supplies <strong>products</strong></p>"
    },
    {
      "name": "Fitness Equipment",
      "slug": "fitness-equipment",
      "totalProduct": "12",
      "totalPrice": "299",
      "note": "<p>All&nbsp; Fitness Equipment <strong>products</strong></p>"
    },
    {
      "name": "Office Supplies",
      "slug": "office-supplies",
      "totalProduct": "15",
      "totalPrice": "149",
      "note": "<p>All&nbsp; Office Supplies <strong>products</strong></p>"
    },
    
  ];
  // Step 1: Initialize state variables
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categoriesData);



  // Step 2: Create a function to update the search query state
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Step 3: Use the filter method to filter categories
    const filtered = categoriesData.filter((category) =>
      category.name.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">All Categories</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Categories: {filteredCategories.length}
          </p>
          {/* Step 4: Use the searchQuery state */}
          <input
            type="text"
            placeholder="Search Categories"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category) => (
         <CategoryCard key={category.slug} category={category}/>
        ))}
      </div>
    </div>
  );
};

export default Categories;
