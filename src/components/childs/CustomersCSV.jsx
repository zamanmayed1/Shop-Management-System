import React from "react";
import { CSVLink } from "react-csv";
import { useGetCustomersQuery } from "../../redux/features/api/apiSlice";

const CustomerCSV = () => {
  const { isLoading, data: csvData, isSuccess } = useGetCustomersQuery();

  return (
    <>
      {isSuccess && csvData.length > 0 ? (
        <CSVLink filename={"Customers.csv"} className="px-4 py-3  text-white border rounded-md border-green-500 bg-red-500 hover:bg-blue-500  hover:text-white duration-500" data={csvData}>Export Customers</CSVLink>
      ) : (
        <p>Preparing Your Download...</p>
      )}
    </>
  );
};

export default CustomerCSV;
