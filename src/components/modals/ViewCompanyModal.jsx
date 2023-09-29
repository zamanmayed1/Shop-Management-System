import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ViewCompanyModal = ({ isOpen, setIsOpen, company }) => {
  function closeModal() {
    setIsOpen(false);
  }

  if (!isOpen || !company) {
    return null;
  }

  const { companyName, note, phone, productList } = company;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-[650px] max-w-md md:max-w-[650px] p-6 bg-white rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {companyName}
              </h1>
              <table className="w-full mb-4">
                <tbody>
                  <tr className="border-b">
                    <td className="font-semibold">Phone:</td>
                    <td>{phone}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="font-semibold">Note:</td>
                    <td>{note}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold">Products:</td>
                    <td>
                      {productList.length <= 0 ? (
                        <span className="text-red-500">No Product Found!</span>
                      ) : (
                        productList.map((val, i) => (
                          <span className="px-4 mx-2 border bg-gray-50" key={i}>
                            {val}
                          </span>
                        ))
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ViewCompanyModal;
