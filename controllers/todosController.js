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
  findOne: function(req, res) {
      db.Todo
        .findOne({name: req.params.name})
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
  remProg: function (req, res) {
    db.Todo
      .updateOne({ name: req.params.name }, {$pull:{inProgress: req.params.task}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Todo
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Todo
      .create(req.body)
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
