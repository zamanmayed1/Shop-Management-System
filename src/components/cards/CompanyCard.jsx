import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import companyimg from "../../assets/company.png"
import ViewCompanyModal from "../modals/ViewCompanyModal";
const CompanyCard = ({ company }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let {companyName,phone} = company
  return (
    <div className="bg-white cursor-pointer p-4 border flex flex-col justify-between transition duration-200 transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-lg font-semibold mb-2 bg-blue-500 py-2 px-1 text-white">{companyName}</h2>
      <p className="text-gray-700">Phone: {phone}</p>

      <div className="mt-4 flex items-center space-x-4 border-t pt-2">
        <button  onClick={() => setIsModalOpen(true)} className="flex items-center text-blue-600 hover:text-blue-800">
          <FaEye className="mr-1" /> View
        </button>
        <button className="flex items-center text-green-600 hover:text-green-800">
          <FaEdit className="mr-1" /> Edit
        </button>
        <button className="flex items-center text-red-600 hover:text-red-800">
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>
      <img
       onClick={() => setIsModalOpen(true)}
        className="opacity-10 w-12 absolute right-0 bottom-0"
        src={companyimg}
        alt=""
      />
      <ViewCompanyModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} company={company}/>
    </div>
  );
};

export default CompanyCard;
