import React, { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/v1/get-user-information",
          { withCredentials: true }
        );
        setUserData(res.data);
      } catch (error) {
        console.log(error.response?.data);
      }
    };

    fetchUser();
  }, []);

  if (!userData) return null;

  return (
    <div className="bg-zinc-900 min-h-screen px-4 md:px-12 py-8 text-white">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar */}
        <div className="w-full md:w-1/5">
          <Sidebar data={userData} />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-4/5">
          

          

          {/* Nested Routes (like orders, favorites, etc.) */}
          <div className="mt-10">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;