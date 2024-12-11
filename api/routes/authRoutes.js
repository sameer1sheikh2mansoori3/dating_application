import express from 'express'
const router = express.Router()
import { signup, signin, logout } from '../controllers/authControllers.js'
import { protectedRoute } from '../middleware/auth.js';
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
router.get("/me" , protectedRoute , (req  , res) => {   
    res.send({
        success: true,
        user: req.user
    });
});
export default router;