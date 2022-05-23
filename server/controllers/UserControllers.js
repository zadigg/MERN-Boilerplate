const UserModel = require("../models/UserModels");
exports.findAll = (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

exports.createUser = (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  newUser.save((err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  UserModel.findByIdAndUpdate(id, user, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};
