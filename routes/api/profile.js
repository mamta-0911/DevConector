const express = require("express");

const router = express.Router();
//@route Get Api/profile
//@desc Test route
//@access Public
router.get("/", (req, res) => res.send("profile route"));

module.exports = router;
