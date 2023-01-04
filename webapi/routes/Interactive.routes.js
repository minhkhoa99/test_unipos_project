const express = require("express");
const Interactive = require("../controllers/Interactive.controller");

const router = express.Router();

router.post("/", Interactive.createInteractive);

router.get("/", Interactive.getInteractive);

router.delete("/:id", users.deleteInteractive);

module.exports = router;
