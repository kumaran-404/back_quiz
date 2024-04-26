import { Router } from "express";
import { User } from "../db/models";
import { createUser, evaluate, getAll, login } from "../controllers/admin";
const router = Router();

// create user

router.post("/create", createUser);

// fetch all

router.get("/", getAll);

router.post("/login", login);

export default router;
