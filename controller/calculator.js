const Calculation = require("../models/Calculation");
const User = require("../models/Calculation");
require("dotenv").config();

exports.add = async (req, res, next) => {
  try {
    // let num1 = Number(req.params.num1);
    // let num2 = Number(req.params.num2);
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    let result = num1 + num2;
    if (isNaN(result)) {
      res.status(403).json({
        status: "error",
        message: "Please input numbers only!!",
      });
      return;
    }
    const cal = new Calculation({
      operation: "add",
      num1: num1,
      num2: num2,
      result: result,
    });
    const response = await cal.save();
    res.status(200).json({
      status: "success",
      equation: `${num1} + ${num2}`,
      result: result,
    });
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};
exports.subtract = async (req, res, next) => {
  try {
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    let result = num1 - num2;
    if (isNaN(result)) {
      res.status(403).json({
        status: "error",
        message: "Please input numbers only!!",
      });
      return;
    }
    const cal = new Calculation({
      operation: "subtract",
      num1: num1,
      num2: num2,
      result: result,
    });
    const response = await cal.save();
    res.status(200).json({
      status: "success",
      equation: `${num1} - ${num2}`,
      result: result,
    });
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};
exports.divide = async (req, res, next) => {
  try {
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    let result = num1 / num2;
    if (isNaN(result)) {
      res.status(403).json({
        status: "error",
        message: "Please input numbers only!!",
      });
      return;
    }
    const cal = new Calculation({
      operation: "divide",
      num1: num1,
      num2: num2,
      result: result,
    });
    const response = await cal.save();
    res.status(200).json({
      status: "success",
      equation: `${num1} / ${num2}`,
      result: result,
    });
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};
exports.multiply = async (req, res, next) => {
  try {
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    let result = num1 * num2;
    if (isNaN(result)) {
      res.status(403).json({
        status: "error",
        message: "Please input numbers only!!",
      });
      return;
    }
    const cal = new Calculation({
      operation: "multiply",
      num1: num1,
      num2: num2,
      result: result,
    });
    const response = await cal.save();
    res.status(200).json({
      status: "success",
      equation: `${num1} * ${num2}`,
      result: result,
    });
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};
exports.exponent = async (req, res, next) => {
  try {
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    let result = num1 ** num2;
    if (isNaN(result)) {
      res.status(403).json({
        status: "error",
        message: "Please input numbers only!!",
      });
      return;
    }
    const cal = new Calculation({
      operation: "exponent",
      num1: num1,
      num2: num2,
      result: result,
    });
    const response = await cal.save();
    res.status(200).json({
      status: "success",
      equation: `${num1} ** ${num2}`,
      result: result,
    });
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};
exports.history = async (req, res, next) => {
  try {
    const history = await Calculation.find().exec();
    history.reverse();
    res.json({
      history,
    });
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Error while fetching Data",
    });
  }
};
