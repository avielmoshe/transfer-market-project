import express from "express";
import {
  createNewUser,
  updateUser,
  deleteUser,
  singInUser,
  TokenValid,
  toggleItemInSavedList,
  getSavedList,
} from "../controllers/userController.js";

import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/validateToken", verifyToken, TokenValid);

router.get("/getSavedList", verifyToken, getSavedList);

router.post("/signup", createNewUser);

router.post("/signIn", singInUser);

router.patch("/updateUser", verifyToken, updateUser);

router.post("/toggle-saved", verifyToken, toggleItemInSavedList);

router.delete("/deleteUser", verifyToken, deleteUser);

export default router;
