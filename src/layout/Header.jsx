import React from "react";
import {  useSelector } from "react-redux";
const Header = () => {
  const companyName = useSelector((state) => state.settings.companyName)
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <header className="bg-white py-2 px-4 md:px-8 shadow-sm rounded-md">
      <div className="md:flex justify-between items-center">
        <div className="my-2">
          <h1 className="text-xl text-center font-semibold text-gray-800">{companyName}</h1>
        </div>

        <div className="lg:text-right text-center text-gray-600 my-2">
          <div className="text-sm font-bold">{formattedDate}</div>
          <div className="text-xl font-semibold">
            {currentDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
