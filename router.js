const express = require("express");
const { goForAdventure } = require("./controllers/pathController");
const router = express.Router();

router
	.post("/", (req, res) => {
		res.json(goForAdventure(req.body));
	});

module.exports = router;