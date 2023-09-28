import React, { useState } from 'react';
import CategoryCard from '../components/cards/CategoryCard';

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      name: 'Electronics',
      totalProducts: 10,
      products: [
        {
          id: 101,
          name: 'Laptop',
          price: 800,
        },
        {
          id: 102,
          name: 'Smartphone',
          price: 400,
        },
      ],
    },
    {
      id: 2,
      name: 'Clothing',
      totalProducts: 2,
      products: [
        {
          id: 201,
          name: 'T-Shirt',
          price: 20,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      totalProducts: 5,
      products: [
        {
          id: 301,
          name: 'Watch',
          price: 100,
        },
        {
          id: 302,
          name: 'Headphones',
          price: 50,
        },
        {
          id: 303,
          name: 'Sunglasses',
          price: 30,
        },
      ],
    },
    {
      id: 4,
      name: 'Furniture',
      totalProducts: 3,
      products: [
        {
          id: 401,
          name: 'Sofa',
          price: 500,
        },
        {
          id: 402,
          name: 'Table',
          price: 150,
        },
      ],
    },
    {
      id: 5,
      name: 'Books',
      totalProducts: 4,
      products: [
        {
          id: 501,
          name: 'Novel',
          price: 10,
        },
        {
          id: 502,
          name: 'Textbook',
          price: 30,
        },
        {
          id: 503,
          name: 'Mystery',
          price: 15,
        },
      ],
    },
    {
      id: 6,
      name: 'Home Appliances',
      totalProducts: 6,
      products: [
        {
          id: 601,
          name: 'Refrigerator',
          price: 600,
        },
        {
          id: 602,
          name: 'Washing Machine',
          price: 400,
        },
      ],
    },
    {
      id: 7,
      name: 'Toys',
      totalProducts: 8,
      products: [
        {
          id: 701,
          name: 'Action Figure',
          price: 15,
        },
        {
          id: 702,
          name: 'Doll',
          price: 10,
        },
      ],
    },
    {
      id: 8,
      name: 'Sports Equipment',
      totalProducts: 3,
      products: [
        {
          id: 801,
          name: 'Basketball',
          price: 25,
        },
      ],
    },
    {
      id: 9,
      name: 'Beauty',
      totalProducts: 7,
      products: [
        {
          id: 901,
          name: 'Lipstick',
          price: 8,
        },
      ],
    },
    {
      id: 10,
      name: 'Automotive',
      totalProducts: 4,
      products: [
        {
          id: 1001,
          name: 'Car Wax',
          price: 12,
        },
        {
          id: 1002,
          name: 'Oil Filter',
          price: 5,
        },
      ],
    },
    // Add more categories as needed...
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
         <CategoryCard key={category.id} category={category}/>
        ))}
      </div>
    </div>
  );
};

export default Categories;
