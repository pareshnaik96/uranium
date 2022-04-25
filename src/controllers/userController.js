const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  }
  catch (error) {
    res.status(500).send({ msg: "error", error: error.message });
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(401).send({ status: false, msg: "username or the password is not correct", });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "uranium",
        organisation: "FunctionUp",
      },
      "functionup-uranium"
    );
    res.status(200).send({ status: true, data: token });
  }
  catch (error) {
    res.status(500).send({ msg: "error", error: error.message });
  }

};


const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(400).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
  }
  catch (error) {
    res.status(500).send({ msg: "error", error: error.message });
  }

};


const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).end("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: updatedUser, data: updatedUser });
  }
  catch (error) {
    res.status(500).send({ msg: "error", error: error.message });
  }

};


const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if (!user) {
      return res.status(400).send({ status: false, message: "no such user exists" })
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.status(200).send({ status: true, data: updatedUser })
  }
  catch (error) {
    res.status(500).send({ msg: "error", error: error.message });
  }

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
