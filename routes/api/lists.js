const router = require("express").Router();
const listController = require("../../controllers/ListController");

// Matches with "/api/lists"
router.route("/")
  .get(listController.findAll)
  .post(listController.create);

// Matches with "/api/lists/:id"
router.route("/:id")
  .get(listController.findById)
  .delete(listController.remove)
  .put(listController.update);
 
module.exports = router;
