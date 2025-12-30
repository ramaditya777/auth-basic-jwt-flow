import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

//.env config
dotenv.config();

//Express app Generator;
const app = express();

//Middleware
app.use(express.json()); //to read json data;

// ✅ CORS SETUP
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//Connect Database
connectDB();

//Auth Routes
app.use("/api/", authRoutes);

//Testing route
app.get("/", (req, res) => {
  console.log("Hello world");
  res.send("Hello world!");
});

//Server listening on port;
const PORT = process.env.PORT;
app.listen(PORT || 3001, () => {
  console.log(`Server running on ${PORT}`);
});
