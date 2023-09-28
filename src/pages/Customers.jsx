import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const Customers = () => {
  const customersData = [
    {
      id: 1,
      fullName: "John Doe",
      phoneNumber: "123-456-7890",
      reference: "Abdul Jalil",
      address: "Hilalpur, Sylhet",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      phoneNumber: "987-654-3210",
      reference: "Samantha Johnson",
      address: "Green Street, New York",
    },
    {
      id: 3,
      fullName: "Bob Johnson",
      phoneNumber: "555-123-4567",
      reference: "Michael Williams",
      address: "Main Road, Los Angeles",
    },
    {
      id: 4,
      fullName: "Alice Brown",
      phoneNumber: "555-987-6543",
      reference: "Sarah Miller",
      address: "Maple Avenue, Chicago",
    },
    {
      id: 5,
      fullName: "David Wilson",
      phoneNumber: "888-555-1234",
      reference: "Emily Davis",
      address: "Oak Street, San Francisco",
    },
    {
      id: 6,
      fullName: "Ella Martinez",
      phoneNumber: "777-333-2222",
      reference: "Oliver Jones",
      address: "Pine Road, Miami",
    },
    {
      id: 7,
      fullName: "William Taylor",
      phoneNumber: "555-888-9999",
      reference: "Sophia White",
      address: "Cedar Lane, Houston",
    },
    {
      id: 8,
      fullName: "Grace Harris",
      phoneNumber: "444-666-7777",
      reference: "Daniel Clark",
      address: "Elm Street, Boston",
    },
    {
      id: 9,
      fullName: "James Anderson",
      phoneNumber: "333-222-1111",
      reference: "Lily Turner",
      address: "Birch Avenue, Seattle",
    },
    {
      id: 10,
      fullName: "Olivia Lee",
      phoneNumber: "222-444-5555",
      reference: "Noah Wright",
      address: "Willow Drive, Dallas",
    },
    // Add more customer data objects here...
  ];


  // Step 1: Initialize state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(customersData);

  // Step 2: Create a function to update the search query state
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Step 3: Use the filter method to filter customers
    const filtered = customersData.filter((customer) =>
      customer.fullName.toLowerCase().includes(query)
    );
    setFilteredCustomers(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Customer List</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Customers: {filteredCustomers.length}
          </p>
          {/* Step 4: Use the searchQuery state */}
          <input
            type="text"
            placeholder="Search Customers"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white cursor-pointer p-4 border flex flex-col justify-between transition duration-200 transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-lg font-semibold mb-2">{customer.fullName}</h2>
            <p className="text-gray-700">ID: {customer.id}</p>
            <p className="text-gray-700">Phone Number: {customer.phoneNumber}</p>
            <p className="text-gray-700">Reference: {customer.reference}</p>
            <p className="text-gray-700">Address: {customer.address}</p>

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
              src="https://img.icons8.com/?size=256&id=11730&format=png"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
