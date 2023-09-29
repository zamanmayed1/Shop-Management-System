import React, { useState } from "react";
import CustomerCard from "../components/cards/CustomerCard";

const Customers = () => {
  const customersData = [
    {
      "fullName": "John Doe",
      "phoneNumber": "123-456-7890",
      "reference": "Abdul Jalil",
      "address": "Hilalpur, Sylhet",
      "note": "<p>John Doe's note</p>"
    },
    {
      "fullName": "Jane Smith",
      "phoneNumber": "987-654-3210",
      "reference": "Samantha Johnson",
      "address": "Green Street, New York",
      "note": "<p>Jane Smith's note</p>"
    },
    {
      "fullName": "Bob Johnson",
      "phoneNumber": "555-123-4567",
      "reference": "Michael Williams",
      "address": "Main Road, Los Angeles",
      "note": "<p>Bob Johnson's note</p>"
    },
    {
      "fullName": "Alice Brown",
      "phoneNumber": "555-987-6543",
      "reference": "Sarah Miller",
      "address": "Maple Avenue, Chicago",
      "note": "<p>Alice Brown's note</p>"
    },
    {
      "fullName": "David Wilson",
      "phoneNumber": "888-555-1234",
      "reference": "Emily Davis",
      "address": "Oak Street, San Francisco",
      "note": "<p>David Wilson's note</p>"
    },
    {
      "fullName": "Ella Martinez",
      "phoneNumber": "777-333-2222",
      "reference": "Oliver Jones",
      "address": "Pine Road, Miami",
      "note": "<p>Ella Martinez's note</p>"
    },
    {
      "fullName": "William Taylor",
      "phoneNumber": "555-888-9999",
      "reference": "Sophia White",
      "address": "Cedar Lane, Houston",
      "note": "<p>William Taylor's note</p>"
    },
    {
      "fullName": "Grace Harris",
      "phoneNumber": "444-666-7777",
      "reference": "Daniel Clark",
      "address": "Elm Street, Boston",
      "note": "<p>Grace Harris's note</p>"
    },
    {
      "fullName": "James Anderson",
      "phoneNumber": "333-222-1111",
      "reference": "Lily Turner",
      "address": "Birch Avenue, Seattle",
      "note": "<p>James Anderson's note</p>"
    },
    {
      "fullName": "Olivia Lee",
      "phoneNumber": "222-444-5555",
      "reference": "Noah Wright",
      "address": "Willow Drive, Dallas",
      "note": "<p>Olivia Lee's note</p>"
    }
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
         <CustomerCard key={customer.phoneNumber} customer={customer}/>
        ))}
      </div>
    </div>
  );
};

export default Customers;
