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


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <h1>Home Page</h1>,
        },
        {
          path: "/products",
          element: <Products/>,
        },
        {
          path: "/category",
          element: <Categories/>,
        },
        {
          path: "/customers",
          element: <Customers/>,
        },
        {
          path: "/company",
          element: <Companies/>,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);