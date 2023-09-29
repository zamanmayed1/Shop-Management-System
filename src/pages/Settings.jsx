import React from "react";
import { effect, signal } from "@preact/signals-react";
export const companyName = signal(localStorage.getItem("comName") || "Company Name");
const Settings = () => {
  effect(() => localStorage.setItem("comName", companyName.value));
  return (
    <div>
      <div className="mb-4 bg-blue-50/40 p-2 rounded-md">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      <div className="p-2">
        <label className="block" htmlFor="comname">Company Name:</label>
        <input
        id="comname"
          defaultValue={companyName.value}
          onBlur={(e)=>companyName.value=e.target.value}
          type="text"
          placeholder="Company Name"
          className="w-2/4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Settings;
