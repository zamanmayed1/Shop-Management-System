import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import productimg from "../../assets/product.png"
import ViewProductsModal from "../modals/ViewProductsModal";
import { Link, useParams } from "react-router-dom";
const ProductCard = ({product}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
    
      className="bg-white cursor-pointer p-4 border flex flex-col justify-between transition duration-200 transform hover:scale-105 hover:shadow-xl"
    >
      <h2 className="text-lg font-semibold mb-2 bg-blue-500 py-2 px-1 text-white ">{product.name}</h2>
      <p className="text-gray-700">ID: {product.id}</p>
      <p className="text-gray-700">Category: {product.category}</p>
      <p className="text-gray-700">Stock: {product.stock} Unit</p>
      <p className="text-gray-700">
        Buy Price:
        <span className="text-black">${product.buyPrice.toFixed(2)}</span>
      </p>
      <p className="text-gray-700">
        Sale Price:
        <span className="text-black">${product.salePrice.toFixed(2)}</span>
      </p>
      {/* <p className="text-gray-700">Stock: {product.stock}</p> */}

      <div className="mt-4 flex items-center space-x-4 border-t pt-2">
        <button onClick={() => setIsModalOpen(true)} className="flex items-center text-blue-600 hover:text-blue-800">
          <FaEye  className="mr-1" /> View
        </button>
        <Link to={`edit/${product.id}`} className="flex items-center text-green-600 hover:text-green-800">
          <FaEdit className="mr-1" /> Edit
        </Link>
        <button className="flex items-center text-red-600 hover:text-red-800">
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>
      <img
      onClick={() => setIsModalOpen(true)}
        className="opacity-10 w-12 absolute right-0 bottom-0"
        src={productimg}
        alt=""
      />
      <ViewProductsModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} product={product} />
    </div>
  );
};

export default ProductCard;
