import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

const AddCustomer = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddCustomer = (data) => {
    console.log("New customer added:", data);
    // You can add your logic here to process the form data
    // For example, sending it to the server
  };

  const onSubmit = (formData) => {
    // Include the content of the TinyMCE editor in the form data
    formData.note = note;
    handleAddCustomer(formData);
    reset();
  };

  const [note, setNote] = useState("");

  const handleNoteChange = (content) => {
    setNote(content);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 p-4 ">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Add New Customer</h1>
      </div>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          {...register("fullName")}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          {...register("phoneNumber")}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          {...register("address")}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="note" className="block text-gray-700">
          Note
        </label>
        <Editor
          apiKey="geqdf9cawks4y0x46ogrzwqb4cowpuwnm3nbna23sso69qpt"
          value={note}
          onEditorChange={handleNoteChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reference" className="block text-gray-700">
          Reference
        </label>
        <input
          type="text"
          id="reference"
          name="reference"
          {...register("reference")}
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Customer
      </button>
    </form>
  );
};

export default AddCustomer;
