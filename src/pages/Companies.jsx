import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import CompanyCard from "../components/cards/CompanyCard";

const Companies = () => {
  const companiesData = [
    {
      id: 1,
      name: "ABC Inc.",
      phone: "123-456-7890",
      salesperson: "John Smith",
    },
    {
      id: 2,
      name: "XYZ Corp.",
      phone: "987-654-3210",
      salesperson: "Jane Doe",
    },
    {
      id: 3,
      name: "Tech Solutions Ltd.",
      phone: "555-123-4567",
      salesperson: "Robert Johnson",
    },
    {
      id: 4,
      name: "Global Widgets Inc.",
      phone: "555-987-6543",
      salesperson: "Alice Brown",
    },
    {
      id: 5,
      name: "Acme Innovations",
      phone: "888-555-1234",
      salesperson: "David Wilson",
    },
    {
      id: 6,
      name: "EcoTech Industries",
      phone: "777-333-2222",
      salesperson: "Ella Martinez",
    },
    {
      id: 7,
      name: "Data Solutions LLC",
      phone: "555-888-9999",
      salesperson: "William Taylor",
    },
    {
      id: 8,
      name: "Infinite Innovations",
      phone: "444-666-7777",
      salesperson: "Grace Harris",
    },
    {
      id: 9,
      name: "Sunshine Enterprises",
      phone: "333-222-1111",
      salesperson: "James Anderson",
    },
    {
      id: 10,
      name: "Swift Systems Inc.",
      phone: "222-444-5555",
      salesperson: "Olivia Lee",
    },
    // You can continue adding more company objects here...
  ];
  

  // Step 1: Initialize state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companiesData);

  // Step 2: Create a function to update the search query state
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Step 3: Use the filter method to filter companies
    const filtered = companiesData.filter((company) =>
      company.name.toLowerCase().includes(query)
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Company List</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Companies: {filteredCompanies.length}
          </p>
          {/* Step 4: Use the searchQuery state */}
          <input
            type="text"
            placeholder="Search Companies"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredCompanies.map((company) => (
         <CompanyCard key={company.id} company={company}/>
        ))}
      </div>
    </div>
  );
};

export default Companies;
