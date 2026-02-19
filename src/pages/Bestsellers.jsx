import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹499",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "₹399",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Héctor García",
    price: "₹350",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "₹450",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
];

const Bestsellers = () => {

  const dispatch = useDispatch();

  const addHandler = (book) => {
    dispatch(cartActions.addToCart(book));
    alert("Book added to cart 🛒");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-indigo-950 text-white px-6 py-16">
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          📚 Bestseller Books
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl p-4 shadow-xl hover:scale-105 transition duration-500"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />

              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{book.author}</p>
              <p className="text-indigo-400 font-bold mb-4">{book.price}</p>

              <button className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:scale-105 transition duration-300">
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
