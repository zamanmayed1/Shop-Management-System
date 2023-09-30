import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName, setTheme } from "../redux/features/settignsSlice.js";
import { Sketch  } from "@uiw/react-color";

const Settings = () => {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.settings.companyName);
  const themeColor = useSelector((state) => state.settings.theme);

  return (
    <div>
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      <div className="p-2">
        <label className="block" htmlFor="comname">
          Company Name:
        </label>
        <input
          id="comname"
          defaultValue={companyName}
          onChange={(e) => dispatch(setCompanyName(e.target.value))}
          type="text"
          placeholder="Company Name"
          className="w-2/4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="p-2">
        <label className="block" htmlFor="comname">
          Background Color:
        </label>
        <Sketch  color={themeColor} 
        onChange={(color) => {
          dispatch(setTheme(color.hex))
        }}
        />


      </div>
    </div>
  );
};

export default Settings;
