const db = require("../database/models/index");
const bcrypt = require("bcryptjs");

module.exports.createUser = async (req, res) => {
  try {
    const passFontend = req.body.Password;
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(passFontend, salt);
    const userDetails = await db.models.Users.create({
      ...req.body,
      Password: hash,
    });

    // const userDetails = await db.models.Users.create({
    //   id: req.body.id,
    //   username: req.body.username,
    //   Email: req.body.Email,
    //   Password: hash,
    //   DOB: req.body.DOB,
    //   Gender: req.body.Gender,
    //   Avata: req.body.Avata,
    //   Level: req.body.Level,
    //   referralCode: req.body.ReferralCode,
    //   Status: req.body.Status,
    // });

    console.log(userDetails);

    // console.log(userDetails);

    res.status(200).send({
      status: 200,
      message: "Success",
      data: "data",
    });
  } catch (error) {
    console.log("hello");
    console.log(error.errors[0].message);

    // console.log(error);
    // console.log(error.errors[0].message);

    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getAllUser = async (req, res) => {
  try {
    const users = await db.models.Users.findAll();
    res.status(200).send({
      status: 200,
      message: "Success",
      data: users,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await db.models.Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      status: 200,
      data: user,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await db.models.Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.Password, salt);
      console.log(user.username);
      user.username = req.body.username;
      (user.Email = req.body.Email), (user.Password = hash);
      user.DOB = req.body.DOB;
      user.Gender = req.body.Gender;
      user.Avata = req.body.Avata;
      user.Level = req.body.Level;
      user.referralCode = req.body.referralCode;
      user.Status = req.body.Status;
      await user.save();
    }
    res.status(200).send({
      status: 200,
      message: "Success",
      data: user,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await db.models.Users.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (user) {
      await user.destroy();
    }
    res.status(200).send({
      status: 200,
      message: "Delete oke",
    });
  } catch (error) {
    return res.status(400).send({
      message: "Unable to insert data",
      error: error,
      status: 400,
    });
  }
};
