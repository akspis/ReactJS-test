import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Products /> },
      {
        path: "/featured",
        element: <Featured />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
