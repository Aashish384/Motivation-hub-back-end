import express from "express";

import upload from "../utils/multer.js";
import {
  getmyProfile,
  getUserProfile,
  editProfile,
  getUsers,
  resetPassword,
  checkResetString,
  createNewPassword,
  getFriends,
  addFriend,
  acceptFriend,
  removeFriend,
  changeRole,
  getNotifications,
  readNotifications,
  reportUser,
  applyExpert,
  fetchExpertApplications,
  acceptExpertApplication,
  rejectExpertApplication,
} from "../controllers/userController.js";
import { protect, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/get", protect, getmyProfile);
router.get("/get/:userId", protect, getUserProfile);
router.post("/edit", protect, upload.single("photo"), editProfile);
router.get("/users", protect, getUsers);
router.post("/change-role/:userId", protect, isAdmin, changeRole);
router.post("/reset-password", resetPassword);
router.post("/check-reset-string/:resetString", checkResetString);
router.post("/reset-password/:resetString", createNewPassword);
router.get("/friends", protect, getFriends);
router.post("/add-friend", protect, addFriend);
router.post("/accept-friend", protect, acceptFriend);
router.post("/remove-friend", protect, removeFriend);
router.get("/notifications", protect, getNotifications);
router.get("/notifications/read", protect, readNotifications);
router.get("/expert-applications", protect, fetchExpertApplications);
router.post("/expert-applications/accept/:applicationId", protect, acceptExpertApplication);
router.post("/expert-applications/reject/:applicationId", protect, rejectExpertApplication);
router.post("/apply-expert", protect, upload.array("files"), applyExpert);
router.post("/report/:userId", protect, reportUser);

export default router;
