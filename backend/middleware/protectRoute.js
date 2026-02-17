const protectRoute = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({
      message: "Unauthorized. Please sign in.",
    });
  }
  next();
};

module.exports = protectRoute;