const Calculation = require("../models/Calculation");

exports.add = async (req, res) => {
  try {
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
    await cal.save();

    res.status(200).json({
      status: "success",
      equation: `${num1} + ${num2}`,
      result: result,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};

exports.subtract = async (req, res) => {
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
    await cal.save();

    res.status(200).json({
      status: "success",
      equation: `${num1} - ${num2}`,
      result: result,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};

exports.divide = async (req, res) => {
  try {
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    if (num2 === 0) {
      res.status(403).json({
        status: "error",
        message: "Divisor can't be zero",
      });
      return;
    }

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
    await cal.save();

    res.status(200).json({
      status: "success",
      equation: `${num1} / ${num2}`,
      result: result,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};

exports.multiply = async (req, res) => {
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
    await cal.save();

    res.status(200).json({
      status: "success",
      equation: `${num1} * ${num2}`,
      result: result,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};

exports.exponent = async (req, res) => {
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
    await cal.save();

    res.status(200).json({
      status: "success",
      equation: `${num1} ** ${num2}`,
      result: result,
    });
  } catch (err) {
    return res.status(400).json({
      error: "Error in DB",
    });
  }
};

exports.history = async (req, res) => {
  try {
    const history = await Calculation.find().sort({ _id: -1 }).exec();
    res.json({
      history,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Error while fetching Data",
    });
  }
};
