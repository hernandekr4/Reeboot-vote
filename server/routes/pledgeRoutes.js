const express = require("express");
const router = express.Router();
const { submitPledge } = require("../controllers/pledgeController");

router.post("/", submitPledge);

module.exports = router;
