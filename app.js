const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./backend/routes/user")

const PORT = process.env.PORT || 4000;

//Database connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//Cors
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "https://bookstore-managemet-system.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);


//middleware-session
const session = require("express-session");


app.set("trust proxy", 1);

app.use(
  session({
    secret:"My secret key",
    saveUninitialized: false,
    resave: false,
    cookie: {
  maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  httpOnly: true,
  secure: true,
  sameSite: "none",
}
  })
);

//routes
app.use("/api/v1", user);



app.get("/", (req, res) => {
    res.send("hello");
});


app.listen(PORT, () => {
  console.log(`Server running on port https://localhost:${PORT}`);
});
