import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { Images } from "./components/Images";
import Layout from "./components/Layout";
import NotFound from "./components/404";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/images",
    element: (
      <Layout>
        <Images />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
