import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Calculator from "../pages/Calc";

function RootLayout() {
  return (
    <div className="className= min-h-screen bg-gray-100 flex items-center justify-center">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: "true", element: <Calculator /> },
      //   { path: "/home", element: <Home /> },
      //   { path: "/home", element: <Home /> },
      //   { path: "/home", element: <Home /> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
