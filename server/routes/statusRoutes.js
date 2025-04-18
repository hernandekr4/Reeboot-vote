const express = require("express");
const router = express.Router();
const { checkVoterStatus } = require("../controllers/statusController");

router.post("/", checkVoterStatus);

module.exports = router;
