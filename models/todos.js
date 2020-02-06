const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: { type: String },
  list: [{ type: String }]
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = Todo;
