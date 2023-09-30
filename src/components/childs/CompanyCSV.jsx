import React from "react";
import { CSVLink } from "react-csv";
import {  useGetCompanyQuery } from "../../redux/features/api/apiSlice";

const CompanyCSV = () => {
  const { isLoading, data: csvData, isSuccess } = useGetCompanyQuery();

  return (
    <>
      {isSuccess && csvData.length > 0 ? (
        <CSVLink filename={"Company.csv"} className="px-4 py-3  text-white border rounded-md border-green-500 hover:bg-gray-500 bg-pink-500 hover:text-white duration-500" data={csvData}>Export Companies</CSVLink>
      ) : (
        <p>Preparing Your Download...</p>
      )}
    </>
  );
};

export default CompanyCSV;
