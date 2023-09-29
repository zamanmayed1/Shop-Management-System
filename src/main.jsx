import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import Categories from "./pages/Category";
import Customers from "./pages/Customers";
import Companies from "./pages/Companies";
import Invoice from "./pages/Invoice";
import Settings from "./pages/Settings";
import AddProduct from "./pages/addItems/AddProduct";
import AddCategory from "./pages/addItems/AddCategory";
import AddCustomer from "./pages/addItems/AddCustomer";
import AddCompany from "./pages/addItems/AddCompany";
import Home from "./pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/products",
          element: <Products/>,
        },
        {
          path: "/products/add",
          element: <AddProduct/>,
        },
        {
          path: "/category",
          element: <Categories/>,
        },
        {
          path: "/category/add",
          element: <AddCategory/>,
        },
        {
          path: "/customers",
          element: <Customers/>,
        },
        {
          path: "/customers/add",
          element: <AddCustomer/>,
        },
        {
          path: "/company",
          element: <Companies/>,
        },
        {
          path: "/company/add",
          element: <AddCompany/>,
        },
        {
          path: "/invoice",
          element: <Invoice/>,
        },
        {
          path: "/settings",
          element: <Settings/>,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);