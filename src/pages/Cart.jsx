import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate Total
  const total = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace("₹", ""));
    return acc + price;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-indigo-950 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-center">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            Your cart is empty 📭
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Side - Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-44 object-cover rounded-lg mb-4 sm:mb-0"
                  />

                  <div className="sm:ml-6 flex-1">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-400 text-sm mb-2">
                      {item.author}
                    </p>

                    <p className="text-indigo-400 font-bold text-lg">
                      {item.price}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      dispatch(cartActions.removeFromCart(item.id))
                    }
                    className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side - Summary */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl h-fit">
              <h2 className="text-2xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4 text-gray-300">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between mb-6 text-lg font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                Proceed to Checkout 💳
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
