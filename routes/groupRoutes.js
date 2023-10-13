import express from "express";

import upload from "../utils/multer.js";
import { protect, isExpert, isAdmin } from "../middleware/auth.js";
import {
  createGroup,
  getGroups,
  addGroupMember,
  deleteGroup,
} from "../controllers/groupController.js";

const router = express.Router();

router.post("/new", protect, upload.single("image"), createGroup);
router.post("/add-member", protect, addGroupMember);
router.get("/", protect, getGroups);
router.delete("/:groupId", protect, deleteGroup);

export default router;
