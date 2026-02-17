import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = ({ data }) => {
  if (!data) return null;

  return (
    <div className='bg-zinc-800 p-6 rounded-lg flex flex-col items-center gap-6 '>
      
      {/* Avatar */}
      <img
        src={data.avatar || "/avatar.png"}
        alt="User Avatar"
        
      />

      
      <div className="text-center">
        <h2 className="text-white text-xl font-semibold">
          {data?.username}
        </h2>
        <p className="text-zinc-400 text-sm">
          {data?.email}
        </p>
      </div>

      
      <div className="w-full flex flex-col gap-3 mt-4">
        <NavLink
          to="/profile"
          end
          className={({ isActive }) =>
            `p-3 rounded-lg text-center font-medium transition ${
              isActive
                ? "bg-white text-black"
                : "bg-zinc-700 text-white hover:bg-zinc-600"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/Profile/Settings"
          className={({ isActive }) =>
            `p-3 rounded-lg text-center font-medium transition ${
              isActive
                ? "bg-white text-black"
                : "bg-zinc-700 text-white hover:bg-zinc-600"
            }`
          }
        >
          Settings
        </NavLink>

        <NavLink
          to="/profile/favorite"
          className={({ isActive }) =>
            `p-3 rounded-lg text-center font-medium transition ${
              isActive
                ? "bg-white text-black"
                : "bg-zinc-700 text-white hover:bg-zinc-600"
            }`
          }
        >
          Favorite
        </NavLink>

        <NavLink
          to="/profile/order"
          className={({ isActive }) =>
            `p-3 rounded-lg text-center font-medium transition ${
              isActive
                ? "bg-white text-black"
                : "bg-zinc-700 text-white hover:bg-zinc-600"
            }`
          }
        >
          Orders
        </NavLink>

        </div>
    </div>
  );
};
      

export default Sidebar
