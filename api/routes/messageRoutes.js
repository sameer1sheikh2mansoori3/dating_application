import      express from 'express'
const router = express.Router()
router.get("/", (_req, res) => {
    res.send("Message routes");
});
export default router