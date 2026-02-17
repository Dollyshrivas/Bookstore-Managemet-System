import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
  const [Values, setValues ] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();

  const change = (e) =>{
    const { name,value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async (e) => {
  e.preventDefault();

  if (!Values.username || !Values.email || !Values.password || !Values.address) {
    alert("All fields are required");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/sign-up",
      Values
    );

    console.log(response.data);
    alert("Signup successful!");
    navigate("/Login");
  } catch (error) {
    console.log(error.response?.data || error.message);
    alert(error.response?.data?.message || "Something went wrong");
  }
};

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-900 px-4">
      
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-8 border border-zinc-700">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">
          Create Account
        </h2>
        <p className="text-center text-zinc-400 mt-2">
          Join us and start your journey ✨
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={Values.username}
            onChange={change}
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={Values.email}
            onChange={change}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={Values.password}
            onChange={change}
          />

          {/* Address */}
          <textarea
            rows="3"
            name="address"
            placeholder="Address"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={Values.address}
            onChange={change}
          ></textarea>

          
              <button
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition duration-300"
            onClick={submit}
          >
            Sign Up
          </button>


        </form>

        {/* Footer */}
        <p className="text-center text-zinc-400 mt-6">
          Already have an account?
          <span className="text-indigo-500 font-semibold cursor-pointer ml-1 hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>


  )
}

export default Signup
