const router = require("express").Router();
const userController = require("../../controllers/UserController");

// Matches with "/api/users"
router.route("/")
  .post(userController.create);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(userController.findById)

// Matches with "/api/users/validate/:username"
router.route("/validate/:username")
  .get(userController.findByUsername)
 
module.exports = router;