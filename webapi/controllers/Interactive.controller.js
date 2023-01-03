const { query } = require("express");
const db = require("../database/models/index");

module.exports.createInteractive = async (req, res) => {
  console.log(req.body);
  try {
    const interactiveDetails = await db.models.Interactive.create({
      ...req.body,
    });
    // console.log(interactiveDetails);
    res.status(200).send({
      status: 200,
      message: "successfully created",
      data: interactiveDetails,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      message: "Unable to create blog",
      status: 400,
    });
  }
};

module.exports.getInteractive = async (req, res) => {
  try {
    const interactive = await db.models.Interactive.findAll();
    var result = [];
    for (i = 0; i < interactive.length; i++) {
      let data = interactive[i].userId;
      result.push(data);
      // console.log(result);
    }
    console.log(result);
    res.status(200).send({
      status: 200,
      message: "Success",
      data: interactive,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
