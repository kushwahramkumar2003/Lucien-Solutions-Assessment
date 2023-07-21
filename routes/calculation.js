const express = require("express");
const router = express.Router();

const {
  add,
  subtract,
  divide,
  multiply,
  exponent,
  history,
} = require("../controller/calculator");

router.get("/add", add);
router.get("/subtract", subtract);
router.get("/divide", divide);
router.get("/multiply", multiply);
router.get("/exponent", exponent);
router.get("/history", history);
module.exports = router;
