import express from 'express'
const router = express.Router()
import { signup, login, logout } from '../controllers/authControllers.js'
import { protectedRoute } from '../middleware/auth.js';
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me" , protectedRoute , (req  , res) => {   
    res.send({
        success: true,
        user: req.user
    });
});
export default router;