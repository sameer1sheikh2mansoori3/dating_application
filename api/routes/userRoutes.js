import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { updateProfile } from "../controllers/userControllers.js";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send("User routes");
});
router.put("/update", protectedRoute , updateProfile);

export default router;
