import { Router } from "express";
import { googleRecaptcha, rateLimiting, verifyToken } from "../utils";
import { loginValidator } from "../validators";
import { login } from "../controllers/auth";
import { User } from "../db/models";

const router = Router();

router.use((req: any, res: any, next: any) => {
  if (req.path === "/verifyToken") {
    next();
  } else {
    res.setHeader("Content-type", "application/json");
    return rateLimiting(req, res, next);
  }
});

router.post("/login", loginValidator, async (req: any, res: any) => {
  try {
    console.log(req.body);
    const data = await login(req.body);
    res.json(data);
  } catch (err) {
    console.log("ERROR: " + err.message);
    res.json({ success: false, message: "Error", data: {} });
  }
});

export const middleware = (req: any, res: any, next: any) => {
  const token = req.headers["authorization"];

  if (typeof token !== "undefined") {
    const jwt = token.split(" ")[1];
    console.log(jwt, req.url);
    verifyToken(jwt)
      .then((msg) => {
        // decoded jwt token will be stored here !!
        req.data = msg;
        next();
      })
      .catch((err) => {
        console.log(err);
        res
          .status(498)
          .json({ success: false, message: "Invalid/Expired JWT", data: {} });
      });
  } else {
    res
      .status(498)
      .json({ success: false, message: "Token Not Found", data: {} });
  }
};

router.get("/verifyToken", middleware, async (req, res) => {
  res.json({ success: true, message: "JWT Verified", data: req.data });
});



export default router;
