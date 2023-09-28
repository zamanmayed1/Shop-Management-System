import React from 'react';

const InvoiceField = ({ onEditItem, cellData }) => {
  return (
    <input
    className="w-full px-3 py-2 my-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"

      type={cellData.type}
      placeholder={cellData.placeholder}
      min={cellData.min}
      max={cellData.max}
      step={cellData.step}
      name={cellData.name}
      id={cellData.id}
      value={cellData.value}
      onChange={onEditItem}
      required
    />
  );
};

export default InvoiceField;