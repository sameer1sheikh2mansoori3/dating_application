import express from 'express'
const router = express.Router()
import { signup, signin, logout } from '../controllers/authControllers.js'
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);
export default router;