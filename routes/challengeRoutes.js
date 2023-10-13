import express from "express";

import upload from "../utils/multer.js";
import { protect, isExpert } from "../middleware/auth.js";
import {
  createChallenge,
  getChallenges,
  acceptChallenge,
  getChallenge,
  editChallenge,
  deleteChallenge,
} from "../controllers/challengeController.js";

const router = express.Router();

router.post("/new", protect, upload.single("image"), createChallenge);
router.patch("/edit", protect, upload.single("image"), editChallenge);
router.get("/:challengeId", protect, getChallenge);
router.delete("/:challengeId", protect, deleteChallenge);
router.get("/", protect, getChallenges);
router.post("/accept", protect, acceptChallenge);

export default router;
