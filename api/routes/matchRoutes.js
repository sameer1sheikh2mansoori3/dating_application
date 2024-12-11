import express from 'express'
const router = express.Router()
router.get("/", (_req, res) => {          
    res.send("Match routes");
});
export default router