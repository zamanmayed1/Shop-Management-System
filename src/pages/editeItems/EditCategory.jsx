import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useGetCategoryQuery } from "../../redux/features/api/apiSlice";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  let { id } = useParams();
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const { data:category } = useGetCategoryQuery();

  let currentCategory= category?.find((c) => c.id == id);
  let {name:currentName,slug,totalPrice,totalProduct,note:currentNote } = currentCategory 

  
  const handleEditCategory = (data) => {
    console.log("Updated:", data);
    // You can add your logic here to process the form data
    // For example, sending it to the server
  };

  const onSubmit = (formData) => {
    // Include the content of the TinyMCE editor in the form data
    formData.note = note;
    handleEditCategory(formData);

  };

  const name = watch("name");

  useEffect(() => {
    if (name) {
      const slug = name.toLowerCase().replace(/\s+/g, "-");
      setValue("slug", slug);
    }
  }, [name]);

  const [note, setNote] = useState(currentNote || "");

  const handleNoteChange = (content) => {
    setNote(content);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 p-4 ">
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Edit Category : <span className="text-blue-500">{currentName}</span></h1>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
         defaultValue={currentName}
          {...register("name")}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="slug" className="block text-gray-700">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
         defaultValue={slug}
          {...register("slug")}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="totalProduct" className="block text-gray-700">
          Total Product
        </label>
        <input
          type="number"
          id="totalProduct"
          name="totalProduct"
         defaultValue={totalProduct}
          {...register("totalProduct")}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="totalPrice" className="block text-gray-700">
          Total Price
        </label>
        <input
          type="number"
          id="totalPrice"
          name="totalPrice"
         defaultValue={totalPrice}
          {...register("totalPrice")}
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
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Category
      </button>
    </form>
  );
};

export default EditCategory;
