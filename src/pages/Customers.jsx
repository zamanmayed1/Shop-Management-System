import React, { useState, useEffect } from "react";
import CustomerCard from "../components/cards/CustomerCard";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useGetCustomersQuery } from "../redux/features/api/apiSlice";

const Customers = () => {
const {data , isLoading, isSuccess} = useGetCustomersQuery()
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  

  useEffect(() => {
    // Use the filter method to filter customers when data or searchQuery changes
    const query = searchQuery.toLowerCase();
    const filtered = data?.filter((customer) =>
      customer.fullName.toLowerCase().includes(query)
    );
    setFilteredCustomers(filtered);
  }, [data, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Customer List</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Customers: {filteredCustomers?.length}
          </p>
          <input
            type="text"
            placeholder="Search Customers"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {isLoading ? ( // Render the spinner when loading is true
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredCustomers?.map((customer) => (
            <CustomerCard key={customer.phoneNumber} customer={customer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Customers;
