const express = require("express");
const image = require("../../middleware/multer");
const { getReference, addReference } = require("./reference.contollers");
const router = express.Router();

router.get("/reference", getReference);
router.post("/reference/add", image.single("image"), addReference);

module.exports = router;
