# 📚 Bookstore Management System

A full-stack **Bookstore Management System** built to manage books, users, orders, and inventory efficiently. This application allows admins to manage books and customers to browse, purchase, and track orders.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login (Authentication)
* Browse all books
* Search books by title, author, or category
* Add books to cart
* Place orders
* View order history
* Update profile information

### 🛠️ Admin Features

* Add new books
* Update book details
* Delete books
* Manage inventory (stock control)
* View all users
* Manage orders

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Redux (for state management)
* React Router
* Axios
* Tailwind 

### Backend

* Node.js
* Express.js
* MongoDB (Database)
* Mongoose
* JWT (Authentication)

```

---

## ⚙️ Installation & Setup

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost: 5173
```

Backend runs on:

```
http://localhost:4000
```

---

## 🔐 Authentication

* Session authentication
* Protected routes for admin
* Middleware to verify tokens

---





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
