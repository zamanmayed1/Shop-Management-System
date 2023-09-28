import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { RiHome2Fill, RiProfileFill, RiFolderFill, RiUserFill, RiBuilding2Fill,RiInbox2Fill } from 'react-icons/ri'; // Import icons
import Header from './Header';

const Root = () => {
  const location = useLocation();
  let { pathname } = location;

  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <Header />
      <div className="grid grid-cols-5 gap-2 h-screen p-2">
        <div className="col-span-1 bg-white m-3 shadow-md rounded-md p-2 h-full">
          <NavLink to="/" currentPath={pathname}>
            <RiHome2Fill /> Home
          </NavLink>
          <NavLink to="/products" currentPath={pathname}>
            <RiProfileFill /> Product
          </NavLink>
          <NavLink to="/category" currentPath={pathname}>
            <RiFolderFill /> Category
          </NavLink>
          <NavLink to="/customers" currentPath={pathname}>
            <RiUserFill /> Customer
          </NavLink>
          <NavLink to="/company" currentPath={pathname}>
            <RiBuilding2Fill /> Company
          </NavLink>
          <NavLink to="/invoice" currentPath={pathname}>
            <RiInbox2Fill /> Invoice
          </NavLink>
        </div>
        <div id='noscrollbar' className="col-span-4 bg-white m-3 shadow-md rounded-md p-2 overflow-y-scroll h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ to, currentPath, children }) => {
  const isActive = to === currentPath;

  return (
    <div className='relative  '>
      <Link
      to={to}
      className={`flex duration-300 ease-linear items-center gap-4 py-3  mb-2 text-lg px-2 rounded-md ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-50 hover:bg-blue-50'
      }`}
    >
      <span className='flex justify-center md:justify-start w-full md:w-[18px]'> {children[0]}</span>
      <span className='hidden md:block'> {children[1]}</span>
    </Link>
    
    </div>
  );
};

export default Root;
