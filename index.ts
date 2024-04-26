require("dotenv").config();
import express from "express";
import http from "http";
import cors from "cors";
// import { middleware } from "./routes/auth";
import bodyParser from "body-parser";
import { connectToDb } from "./db/index";
import adminRoute from "./routes/admin";
import userRoute from "./routes/users";
import authRoute, { middleware } from "./routes/auth";
import { Admin } from "./db/models";
import { hashPassword } from "./utils";
import path from "path";

connectToDb();

const app = express();
const port = 8000;
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/api/createAdmin", async (req, res) => {
  try {
    const { email, password, event } = req.body;

    const hashedPassword = await hashPassword(password);

    const user = new Admin({
      email,
      password: hashedPassword,
      event,
    });

    await user.save();

    return res.json({
      message: "Admin created for " + event,
      success: true,
      data: {},
    });
  } catch (err) {
    return res.json({
      message: err.message,
      success: false,
      data: {},
    });
  }
});

app.use("/api/auth", authRoute);

app.use("/api/admin", adminRoute);
app.use("/api/user", middleware, userRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(port, () => console.log("Server is listening at PORT :", port));
