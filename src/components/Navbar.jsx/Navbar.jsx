import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Bestsellers", link: "/Bestsellers" },
    { title: "Contact", link: "/contact" },
  ];
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);


  const [Mobilenav, setMobilenav] = useState("hidden");


  // Add protected links only when logged in
  if (isLoggedIn) {
    links.push(
      { title: "Cart", link: "/cart" },
      { title: "Profile", link: "/profile" }
    );
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-semibold">Bookset</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((items, i) => (
            <Link
              key={i}
              to={items.link}
              className={`hover:text-blue-500 transition-all duration-300 ${
                items.title === "Profile"
                  ? "px-4 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 border border-blue-500 px-3 py-1 rounded"
                  : ""
              }`}
            >
              {items.title}
            </Link>
          ))}

          {/* Show Login & Signup only when NOT logged in */}
          {!isLoggedIn && (
            <>
              <Link
                to="/Login"
                className="px-4 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Login
              </Link>

              <Link
                to="/Signup"
                className="px-4 py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() =>
            Mobilenav === "hidden"
              ? setMobilenav("block")
              : setMobilenav("hidden")
          }
        >
          <FaGripLines />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {Mobilenav && (
        <div className="md:hidden bg-zinc-800 h-screen fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center">
          {links.map((items, i) => (
            <Link
              key={i}
              to={items.link}
              className="text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300"
              onClick={() => setMobilenav(false)}
            >
              {items.title}
            </Link>
          ))}

          {!isLoggedIn && (
            <>
              <Link
                to="/Login"
                className="px-6 mb-6 text-3xl font-semibold py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                onClick={() => setMobilenav(false)}
              >
                Login
              </Link>

              <Link
                to="/Signup"
                className="px-6 text-3xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                onClick={() => setMobilenav(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;

