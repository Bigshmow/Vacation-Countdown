import axios from "axios";

export default {
  // Gets all todos
  getTodos: function() {
    return axios.get("/api/todos");
  },
  // Deletes a todo
  deleteTodo: function(id) {
    return axios.delete("/api/todos/" + id);
  },
  // Adds a todo
  addTodo: function(name,task) {
    return axios.put("/api/todos/" + name + "/" + task);
  },
  // Adds todo to completed
  addComplete: function(name,task) {
    return axios.put("/api/todos/completed/" + name + "/" + task);
  },
  addProg: function(name,task) {
    return axios.put("/api/todos/addprogress/" + name + "/" + task);
  },
  remComplete: function(name,task) {
    return axios.put("/api/todos/undo/" + name + "/" + task);
  },
  // Removes todo from inProgress
  remProg: function(name,task) {
    return axios.put("/api/todos/progress/" + name + "/" + task);
  }
};
