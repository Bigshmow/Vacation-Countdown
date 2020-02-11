const router = require("express").Router();
const todosController = require("../../controllers/todosController");

// Matches with "/api/todos"
router.route("/")
  .get(todosController.findAll);

// Matches with "/api/todos/:name/:task"
router.route("/:name/:task")
  .put(todosController.updateProgress);

router.route("/completed/:name/:task")
  .put(todosController.addComplete);

router.route("/undo/:name/:task")
  .put(todosController.remComplete);

router.route("/addprogress/:name/:task")
  .put(todosController.addProg);
  
router.route("/progress/:name/:task")
  .put(todosController.remProg);
  
module.exports = router;
