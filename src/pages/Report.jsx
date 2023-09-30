import React from "react";
import ProductsCSV from "../components/childs/ProductsCSV";
import CategoryCSV from "../components/childs/CategoryCSV";
import CustomerCSV from "../components/childs/CustomersCSV";
import CompanyCSV from "../components/childs/CompanyCSV";

const Report = () => {
  return (
    <div>
         <div className="mb-4 bg-blue-50/40 py-6 px-2 rounded-md">
        <h1 className="text-2xl font-semibold">Export Reports</h1>
       
      </div>
     <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 ">
      {/*Prduct Csv */}
     <div className="border p-4 flex flex-col items-center shadow-md rounded-md">
      <h1  className="my-3 text-lg font-bold">Download All Preoducts</h1>
      <ProductsCSV />
      </div>
      {/*Category Csv */}
     <div className="border p-4 flex flex-col items-center shadow-md rounded-md">
      <h1 className="my-3 text-lg font-bold">Download All Catrgories</h1>
      <CategoryCSV />
      </div>
      {/*Customers Csv */}
     <div className="border p-4 flex flex-col items-center shadow-md rounded-md">
      <h1 className="my-3 text-lg font-bold">Download All Customer Data</h1>
      <CustomerCSV />
      </div>
      {/*Report Csv */}
     <div className="border p-4 flex flex-col items-center shadow-md rounded-md">
      <h1 className="my-3 text-lg font-bold">Download All Company Data</h1>
      <CompanyCSV />
      </div>
     </div>
    </div>
  );
};

export default Report;
