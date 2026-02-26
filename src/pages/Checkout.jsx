import React, { useState } from "react";
import { cartActions } from "../store/cart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [selectedGateway, setSelectedGateway] = useState("razorpay");
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all required fields");
      return;
    }

    alert(`Payment Successful via ${selectedGateway.toUpperCase()} 🎉`);

    dispatch(cartActions.clearCart());
    navigate("/");
  };

  const gateways = [
    {
      id: "razorpay",
      name: "Razorpay",
      logo: "/razorpay.png",
    },
    {
      id: "paytm",
      name: "Paytm",
      logo: "/paytm.png",
    },
    {
      id: "gpay",
      name: "Google Pay",
      logo: "/gpay.png",
    },
    {
      id: "paypal",
      name: "PayPal",
      logo: "/paypal.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white px-4 md:px-20 py-12">

      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Secure Checkout
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-12">

          
          <div className="space-y-10">

            
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-purple-800 shadow-2xl shadow-purple-900/40">
              <h2 className="text-2xl mb-6 font-semibold text-purple-300">
                Billing Details
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-purple-600 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-purple-600 outline-none"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-purple-600 outline-none"
                />

                <textarea
                  name="address"
                  placeholder="Shipping Address"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-zinc-800 focus:ring-2 focus:ring-purple-600 outline-none"
                />
              </div>
            </div>

            {/* Gateway Selector */}
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-pink-800 shadow-2xl shadow-pink-900/40">
              <h2 className="text-xl mb-6 text-pink-300 font-semibold">
                Select Payment Gateway
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {gateways.map((gateway) => (
                  <div
                    key={gateway.id}
                    onClick={() => setSelectedGateway(gateway.id)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center bg-black/60 hover:scale-105
                    ${
                      selectedGateway === gateway.id
                        ? "border-purple-500 shadow-lg shadow-purple-500/40"
                        : "border-zinc-700"
                    }`}
                  >
                    <img
                      src={gateway.logo}
                      alt={gateway.name}
                      className="h-10 object-contain mb-3 bg-white p-1 rounded"
                    />
                    <p className="text-sm">{gateway.name}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

         
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-indigo-800 shadow-2xl shadow-indigo-900/40 h-fit">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-300">
              Order Summary
            </h2>

            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm"
                >
                  <span>{item.title}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
            </div>

            <hr className="my-6 border-zinc-700" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-purple-400">₹{totalPrice}</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 py-4 rounded-2xl text-lg font-semibold tracking-wide shadow-lg shadow-purple-900"
            >
              Pay ₹{totalPrice}
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Checkout;