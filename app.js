import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

//Testing route
app.get("/ping", (req, res) => {
  console.log("🔔 /ping route hit");
  res.send("pong");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// 0.0.0.0 added for Docker compatibility
app.listen(port, "0.0.0.0", () => {
  console.log("Server is running! at port " + port);
});
