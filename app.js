const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./backend/routes/user");

// DB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1);

// CORS
app.use(cors({
  origin:[
    "http://localhost:5173"
  ],
  credentials: true
}));

// Session
const session = require("express-session");

app.use(session({
  secret: "My secret key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: true, // important for localhost
    sameSite: "none",
  }
}));

// Routes
app.use("/api/v1", user);

app.get("/", (req, res) => {
  res.send("hello");
});

// LOCAL ONLY
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
