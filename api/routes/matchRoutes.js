import express from 'express'
import { protectedRoute } from '../middleware/auth.js';
import { swipeLeft , swipeRight , getMatches , getUserProfile } from '../controllers/matchControllers.js'
const router = express.Router()
router.get("/", (_req, res) => {          
    res.send("Match routes");
});
router.post("/swipe-left/:likedUserId", protectedRoute , swipeLeft);
router.post("/swipe-right/:likedUserId", protectedRoute , swipeRight);
router.get("/" , protectedRoute , getMatches);
router.get("/user-profiles" , protectedRoute , getUserProfile);
export default router