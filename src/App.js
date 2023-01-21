import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { Images } from "./components/Images";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/images",
    element: <Images />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
