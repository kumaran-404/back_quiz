import { Router } from "express";
import { getQuestion,  report,  startGame, submitAnswer } from "../controllers/user";
const router = Router();

router.get("/start-game", startGame);

// get question
router.get("/", getQuestion);

// answer question
router.post("/submit", submitAnswer);

// report on violating full screen 
router.post("/report" , report)

export default router;
