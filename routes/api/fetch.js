const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
	let { target } = req.body;
	const request = require("request");
	request({ uri: target }, (err, result, body) => res.json({ response: body }));
});
module.exports = router;
