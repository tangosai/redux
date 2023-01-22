import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/auth";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "kminchelle",
    password: "0lelplR",
  });
  const handleChange = (e) => {
    const input = e.target;
    setUser({ ...user, [input.name]: input.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: "https://dummyjson.com/auth/login",
        data: {
          username: user.email,
          password: user.password,
        },
      });
      console.log(data);
      dispatch(login(data));
    } catch (err) {
      console.log(err.response.data);
      dispatch(logout());
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-50">
      <div className="bg-white rounded-lg px-8 py-6 shadow-lg w-96">
        <h1 className="text-2xl font-medium text-slate-800 mb-4">Login</h1>
        <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
          <div className="flex flex-col gap-y-1">
            <label className="text-slate-600">Username</label>
            <input
              type="text"
              required
              name="email"
              placeholder="user@gmail.com"
              className="p-2 border border-slate-200 rounded"
              onChange={handleChange}
              value={user.email}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-slate-600">Password</label>
            <input
              type="password"
              required
              name="password"
              placeholder="*******"
              className="p-2 border border-slate-200 rounded"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          <div className="flex justify-between items-center mt-1">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                name="remember"
                disabled={(user.email.length && user.password.length) === 0}
              />
              <label className="text-slate-600">Remember me</label>
            </div>
            <button className="text-white bg-indigo-500 font-medium px-4 py-2 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
