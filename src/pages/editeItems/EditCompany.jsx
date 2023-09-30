import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useParams } from "react-router-dom";
import { useGetCompanyQuery } from "../../redux/features/api/apiSlice";

const EditCompany = () => {
  let { id } = useParams();
  const { data:company } = useGetCompanyQuery();

  let currentCompany= company?.find((c) => c.id == id);
  let {companyName:currentName, note:currentNote,phone ,productList} = currentCompany 

  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState(productList || []); // State to manage the product list
  const [productName, setProductName] = useState(""); // State to capture product name


  const handleEditCompany = (data) => {
    data.note = note; // Include the "Note" content in the form data
    console.log("Updated:", data);
    // You can add your logic here to process the form data
    // For example, sending it to the server
  };

  const onSubmit = (formData) => {
    // Include the product list in the form data
    formData.productList = products;
    handleEditCompany(formData);
    reset();
    setProducts([]); // Clear the product list after submission
  };

  const handleAddProduct = () => {
    if (productName.trim() !== "") {
      setProducts([...products, productName]);
      setProductName("");
    }
  };

  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const [note, setNote] = useState(currentNote || "");

  const handleNoteChange = (content) => {
    setNote(content);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 p-4 ">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Edit Company :  <span className="text-blue-500">{currentName}</span></h1>
      </div>
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          defaultValue={currentName}
          {...register("companyName")}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          defaultValue={phone}
          {...register("phone")}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="note" className="block text-gray-700">
          Note
        </label>
        <Editor
          apiKey="YOUR_API_KEY_HERE"
          value={note}
          onEditorChange={handleNoteChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productList" className="block text-gray-700">
          Product List
        </label>
        <div className="flex">
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <button
            type="button"
            onClick={handleAddProduct}
            className="ml-2 w-1/4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="mt-2">
          {products.map((product, index) => (
            <li key={index} className=" mr-2 pl-4  border inline-block mb-1">
              <span className="mr-4 font-bold">{product}</span>
              <button
                type="button"
                onClick={() => removeProduct(index)}
                className="text-red-500 bg-red-50 px-2 py-2 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Company
      </button>
    </form>
  );
};

export default EditCompany;
