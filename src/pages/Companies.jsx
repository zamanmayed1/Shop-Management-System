import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import CompanyCard from "../components/cards/CompanyCard";

const Companies = () => {
  const companiesData = [
    {
      companyName: "ABC Inc.",
      phone: "123-456-7890",
      productList: ["Oil", "Mata", "lembu"],
      note: "<p>ABC Inc. note</p>",
    },
    {
      companyName: "XYZ Corp.",
      phone: "987-654-3210",
      productList: [],
      note: "<p>XYZ Corp. note</p>",
    },
    {
      companyName: "Tech Solutions Ltd.",
      phone: "555-123-4567",
      productList: [],
      note: "<p>Tech Solutions Ltd. note</p>",
    },
    {
      companyName: "Global Widgets Inc.",
      phone: "555-987-6543",
      productList: [],
      note: "<p>Global Widgets Inc. note</p>",
    },
    {
      companyName: "Acme Innovations",
      phone: "888-555-1234",
      productList: [],
      note: "<p>Acme Innovations note</p>",
    },
    {
      companyName: "EcoTech Industries",
      phone: "777-333-2222",
      productList: [],
      note: "<p>EcoTech Industries note</p>",
    },
    {
      companyName: "Data Solutions LLC",
      phone: "555-888-9999",
      productList: [],
      note: "<p>Data Solutions LLC note</p>",
    },
    {
      companyName: "Infinite Innovations",
      phone: "444-666-7777",
      productList: [],
      note: "<p>Infinite Innovations note</p>",
    },
    {
      companyName: "Sunshine Enterprises",
      phone: "333-222-1111",
      productList: [],
      note: "<p>Sunshine Enterprises note</p>",
    },
    {
      companyName: "Swift Systems Inc.",
      phone: "222-444-5555",
      productList: [],
      note: "<p>Swift Systems Inc. note</p>",
    },
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
          <CompanyCard key={company.phone} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
