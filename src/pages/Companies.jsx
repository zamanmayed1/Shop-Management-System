import React, { useState, useEffect } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import CompanyCard from "../components/cards/CompanyCard";
import axios from "axios"; // Import Axios for data fetching
import Spinner from "../components/Spinner";

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [companiesData, setCompaniesData] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Step 1: Fetch data using Axios when the component mounts
    axios
      .get("https://api.npoint.io/34806c66b4cb7087d92b")
      .then(function (response) {
        setCompaniesData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  useEffect(() => {
    // Step 2: Use the filter method to filter companies when companiesData or searchQuery changes
    const query = searchQuery.toLowerCase();
    const filtered = companiesData.filter((company) =>
      company.companyName.toLowerCase().includes(query)
    );
    setFilteredCompanies(filtered);
  }, [companiesData, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e?.target?.value.toLowerCase());
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Company List</h1>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">
            Total Companies: {filteredCompanies.length}
          </p>
          <input
            type="text"
            placeholder="Search Companies"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? ( // Step 3: Render the spinner when loading is true
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.phone} company={company} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
