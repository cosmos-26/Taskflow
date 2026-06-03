const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");
const validateTask = require("../middleware/validateTask");
router.get("/", taskController.getTasks);
router.post(
  "/",
  validateTask,
  taskController.createTask
);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/:id/toggle", taskController.toggleTask);

module.exports = router;