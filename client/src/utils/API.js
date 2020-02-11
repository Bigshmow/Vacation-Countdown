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
  addTodo: function() {
    return axios.put("/api/todos");
  }
};
