const express = require('express');
const router = express.Router();

router.get("/", (_req, res) => {
  res.send("User routes");
});

module.exports = router;
