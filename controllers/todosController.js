const db = require("../models");

// Defining methods for the TodosController
module.exports = {
  findAll: function(req, res) {
    db.Todo
      .find(req.body)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateProgress: function(req, res) {
      db.Todo
        .updateOne({ name: req.params.name }, {$push:{inProgress: req.params.task }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  addComplete: function (req, res) {
      db.Todo
        .updateOne({ name: req.params.name }, {$push:{complete: req.params.task}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  addProg: function (req, res) {
    db.Todo
      .updateOne({ name: req.params.name }, {$push:{inProgress: req.params.task}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remComplete: function (req, res) {
    db.Todo
      .updateOne({ name: req.params.name }, {$pull:{complete: req.params.task}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remProg: function (req, res) {
    db.Todo
      .updateOne({ name: req.params.name }, {$pull:{inProgress: req.params.task}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Todo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
