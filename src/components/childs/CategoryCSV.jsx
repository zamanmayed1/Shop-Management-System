import React from "react";
import { CSVLink } from "react-csv";
import { useGetCategoryQuery } from "../../redux/features/api/apiSlice";

const CategoryCSV = () => {
  const { isLoading, data: csvData, isSuccess } = useGetCategoryQuery();

  return (
    <>
      {isSuccess && csvData.length > 0 ? (
        <CSVLink filename={"Category.csv"} className="px-4 py-3  text-white border rounded-md border-green-500 hover:bg-blue-500 bg-green-500 hover:text-white duration-500" data={csvData}>Export Categories</CSVLink>
      ) : (
        <p>Preparing Your Download...</p>
      )}
    </>
  );
};

export default CategoryCSV;
