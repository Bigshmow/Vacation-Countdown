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
  .put(todosController.updateProgress);

router.route("/completed/:name/:task")
  .put(todosController.addComplete);

router.route("/progress/:name/:task")
  .put(todosController.remProg);
  
module.exports = router;
