import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import ApiResponse from "./utils/ApiResponse.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// import routes
import authRoutes from "./routes/auth.route.js";

// use routes
app.use("/api/v1/auth", authRoutes);

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(500).send(ApiResponse(statusCode, null, message));
});

export default app;
