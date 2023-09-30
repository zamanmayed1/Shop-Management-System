import React, { useState } from 'react'
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import customerimg from "../../assets/customer.png"
import ViewCustomerModal from '../modals/ViewCustomerModal';
import { Link } from 'react-router-dom';
const CustomerCard = ({customer}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let {fullName,id,reference,address} = customer
  return (
    <div
    
    className="bg-white cursor-pointer p-4 border flex flex-col justify-between transition duration-200 transform hover:scale-105 hover:shadow-xl"
  >
    <h2 className="text-lg font-semibold mb-2 bg-blue-500 py-2 px-1 text-white">{fullName}</h2>

    <p className="text-gray-700">Reference: {reference}</p>
    <p className="text-gray-700">Address: {address}</p>

    <div className="mt-4 flex items-center space-x-4 border-t pt-2">
      <button onClick={() => setIsModalOpen(true)} className="flex items-center text-blue-600 hover:text-blue-800">
        <FaEye className="mr-1" /> View
      </button>
      <Link to={`edit/${customer.id}`} className="flex items-center text-green-600 hover:text-green-800">
        <FaEdit className="mr-1" /> Edit
      </Link>
      <button className="flex items-center text-red-600 hover:text-red-800">
        <FaTrash className="mr-1" /> Delete
      </button>
    </div>
    <img
    onClick={() => setIsModalOpen(true)}
      className="opacity-10 w-12 absolute right-0 bottom-0"
      src={customerimg}
      alt=""
    />
    <ViewCustomerModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} customer={customer}/>
  </div>
  )
}

export default CustomerCard