const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("Hello Server!")
})

module.exports = router;