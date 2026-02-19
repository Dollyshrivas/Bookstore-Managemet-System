import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Profile = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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
    <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white">
      <div className="w-full md:w-1/6">
        <Sidebar data={userData} />
      </div>

      <h1 className="text-3xl font-bold mb-8">🛒 My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">No items in cart</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white/10 p-4 rounded-lg"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-400 text-sm">{item.author}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-indigo-400 font-bold">
                  {item.price}
                </span>

                <button
                  onClick={() => dispatch(cartActions.removeFromCart(item.id))}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => dispatch(cartActions.clearCart())}
            className="mt-6 bg-red-600 px-6 py-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      )}

      <div className="w-full md:w-5/6">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
