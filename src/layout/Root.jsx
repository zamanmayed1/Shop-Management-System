import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { RiSettings3Fill, RiHome2Fill, RiProfileFill, RiFolderFill, RiUserFill, RiBuilding2Fill, RiInbox2Fill } from 'react-icons/ri'; // Import icons
import {TbPlus} from 'react-icons/tb'
import Header from './Header';
import { useSelector } from 'react-redux';

const Root = () => {
  const location = useLocation();
  const themeColor = useSelector((state) => state.settings.theme);
  let { pathname } = location;
  useEffect(()=>{
       window.scrollTo(0,0)
  },[pathname])
  return (
    <div  style={{backgroundColor :themeColor }} className="min-h-screen p-2">
      <Header />
      <div className="grid grid-cols-5 gap-2 h-screen p-2">
        <div className="col-span-1 bg-white m-3 shadow-md rounded-md p-2 h-full">
          <NavLink to="/" currentPath={pathname}>
            <RiHome2Fill /> Home
          </NavLink>
          <NavLink to="/products" currentPath={pathname}>
            <RiProfileFill /> Products
          </NavLink>
          <NavLink to="/category" currentPath={pathname}>
            <RiFolderFill /> Category
          </NavLink>
          <NavLink to="/customers" currentPath={pathname}>
            <RiUserFill /> Customers
          </NavLink>
          <NavLink to="/company" currentPath={pathname}>
            <RiBuilding2Fill /> Company
          </NavLink>
          <NavLink to="/invoice" currentPath={pathname}>
            <RiInbox2Fill /> Invoice
          </NavLink>
          <NavLink to="/settings" currentPath={pathname}>
            <RiSettings3Fill /> Settings
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

  // Create a mapping of main routes to their corresponding add routes
  const addRoutes = {
    "/products": "/products/add",
    "/invoice": "/invoice",
    "/category": "/category/add",
    "/customers": "/customers/add",
    "/company": "/company/add",
  };

  // Get the addRoute based on the current route
  const addRoute = addRoutes[to] || to;

  return (
    <div className='relative  '>
      <Link
        to={to}
        className={`flex duration-300 ease-linear items-center gap-4 py-3  mb-2 text-lg px-2 rounded-md ${
          isActive  ? 'bg-blue-500 text-white' : 'bg-gray-50 hover-bg-blue-50'
        }`}
      >
        <span className='flex justify-center md:justify-start w-full md:w-[18px]'>{children[0]}</span>
        <span className='hidden md:block'>{children[1]}</span>
      </Link>
      {addRoute !== to && isActive && (
        <Link
          className='absolute text-3xl right-2 top-[6px] bg-white hover:text-blue-500 text-black w-10 h-10 rounded-full border text-center flex justify-center items-center'
          to={addRoute}
        >
          <TbPlus className='text-xl'/>
        </Link>
      )}
    </div>
  );
};



export default Root;
