const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: { type: String },
  list: [{
    task: { type: String },
    clicked: {type: Boolean, default: false}
  }
  ]
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = Todo;
