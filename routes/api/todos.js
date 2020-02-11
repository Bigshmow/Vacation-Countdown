const router = require("express").Router();
const todosController = require("../../controllers/todosController");

// Matches with "/api/todos"
router.route("/")
  .get(todosController.findAll)
  .post(todosController.create);

// Matches with "/api/todos/:name"
// router.route("/:name")
//   .get(todosController.findOne);

// Matches with "/api/todos/:name/:task"
router.route("/:name/:task")
  .put(todosController.updateProgress)
  .put(todosController.updateComplete);

module.exports = router;
