const router = require("express").Router();
const protectRoute = require("../middleware/protectRoute");
const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    if (!username || username.length < 4) {
      return res.status(400).json({
        message: "Username length should be greater than 3",
      });
    }

    const existingUsername = await userSchema.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existingEmail = await userSchema.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (!password || password.length <= 5) {
      return res.status(400).json({
        message: "Password length should be greater than 5",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userSchema({
      username,
      email,
      password: hashedPassword,
      address,
    });

    await newUser.save();

    return res.status(201).json({
      message: "Sign-up successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//sign-in option
router.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check fields
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    // check username
    const user = await userSchema.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Username or password",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Username or password",
      });
    }

    // create session
    req.session.user = {
      id: user._id,
      email: user.email,
      username: user.username,
    };

    return res.status(200).json({
      message: "Sign-in successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//get-user-information
router.get("/get-user-information", async (req,res) =>{
  console.log("SESSION DATA:", req.session);
  try{
    if(!req.session.user){
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = await userSchema
      .findById(req.session.user.id)
      .select("-password");

    return res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ message: "Internal server error"});
  }
});





module.exports = router;
