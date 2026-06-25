const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
 console.log("AUTH HEADER:", authHeader);
    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const token = authHeader.split(" ")[1];
       console.log("TOKEN:", token);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

   console.log("Before Verify");

const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);

console.log("After Verify");
console.log("DECODED:", decoded);
    req.user = decoded;

    next();
} catch (error) {
  console.log("JWT ERROR FULL:", error);

  res.status(401).json({
    success: false,
    message: "Invalid token",
    error: error.message,
  });
}
};

module.exports = protect;