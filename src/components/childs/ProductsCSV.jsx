import React from "react";
import { useGetProductsQuery } from "../../redux/features/api/apiSlice";
import { CSVLink } from "react-csv";

const ProductsCSV = () => {
  const { isLoading, data: csvData, isSuccess } = useGetProductsQuery();

  return (
    <>
      {isSuccess && csvData.length > 0 ? (
        <CSVLink filename={"Products.csv"} className="px-4 py-3 bg-blue-500 text-white border rounded-md border-green-500 hover:bg-green-500 hover:text-white duration-500" data={csvData}>Export Products</CSVLink>
      ) : (
        <p>Preparing Your Download...</p>
      )}
    </>
  );
};

export default ProductsCSV;
