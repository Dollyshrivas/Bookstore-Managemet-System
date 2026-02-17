import React , { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import { authActions } from "../store/auth"
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  const [Values, setValues ] = useState({
      username: "",
      password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const change = (e) =>{
      const { name,value } = e.target;
      setValues({ ...Values, [name]: value });
    };
  
    const submit = async (e) => {
    e.preventDefault();
  
    if (!Values.username ||
       !Values.password
      ) {
      alert("All fields are required");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/sign-in",
        Values,
        { withCredentials: true }
      );
      
      console.log(response.data.user);
      dispatch(authActions.login());
      dispatch(authActions.changeRole());
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("role", JSON.stringify(response.data.user));
      navigate("/Profile")

      alert("Login successful!");
      //navigate("/Login");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
      
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">
      
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-8 border border-zinc-700">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h2>
        <p className="text-center text-zinc-400 mt-2">
          Login to your account 👋
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            
            value={Values.username}
            onChange={change}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            
            value={Values.password}
            onChange={change}
          />

          {/* Options */}
          <div className="flex items-center justify-between text-sm text-zinc-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-indigo-600"
              />
              Remember me
            </label>

            <span className="text-indigo-500 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition duration-300"
            onClick={submit}
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-zinc-400 mt-6">
          Don’t have an account?
          <span className="text-indigo-500 font-semibold cursor-pointer ml-1 hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>

  )
}

export default Login
