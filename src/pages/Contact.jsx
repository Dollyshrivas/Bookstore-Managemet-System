import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-indigo-950 text-white px-6 py-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch 💬
          </h1>
          <p className="text-gray-400 mb-8">
            Have questions, ideas, or feedback? We'd love to hear from you.
            Fill out the form and our team will respond as soon as possible.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 Location: India</p>
            <p>📧 Email: support@example.com</p>
            <p>📞 Phone: +91 9971018840</p>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="bg-white/10 backdrop-blur-xl border border-white/20 
        p-8 rounded-2xl shadow-2xl space-y-6">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-zinc-800/70 border border-zinc-600 
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-zinc-800/70 border border-zinc-600 
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-zinc-800/70 border border-zinc-600 
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          ></textarea>

          <button
            type="submit"
            onClick={()=> navigate("/")}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
            rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
