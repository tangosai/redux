import React from "react";
import { Link } from "react-router-dom";

const menus = [
  {
    label: "home",
    to: "/",
  },
  {
    label: "images",
    to: "/images",
  },
  {
    label: "login",
    to: "/login",
  },
];

const Layout = ({ children }) => {
  return (
    <div>
      <div className="bg-slate-900 ">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Redux</h1>
            <ul className="flex">
              {menus.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="text-white capitalize p-6 hover:bg-indigo-600 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div>{children}</div>
      <div className="bg-slate-900 p-32">
        <h1 className="text-6xl text-white">Footer</h1>
      </div>
    </div>
  );
};

export default Layout;
