import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Profile/Sidebar'
import Loader from '../components/Profile/Loader'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios';

const Profile = () => {
  const[Profile,setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-user-information",
          { withCredentials: true }
        );
        setProfile(response.data);
      } catch (error) {
        console.log(error.response?.data);
      }finally {
        setLoading(false); 
      }
    };

    fetchUser();
  }, [isLoggedIn]);
  if (loading) {
    return <Loader />;
  }



  return (
    <div className='bg-yellow-300 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white'>
      {Profile && (
        <>
      <div className='w-full md:w-1/6'>
        <Sidebar data={Profile} />
      </div>

      <div className='w-full md:w-5/6'>
        <Outlet />
      </div>
      </>
      )}
    </div>
  );
};

export default Profile;
