const router = require("express").Router();
const unitController = require("../../controllers/unitController");

// Matches with "/api/units"
router.route("/")
  .get(unitController.findAll)
  .post(unitController.create);

// Matches with "/api/units/:id"
router.route("/:id")
  .get(unitController.findById)

// Matches with "/api/units/all/:mainFaction"
router.route("/all/:faction")
  .get(unitController.findByFaction)
 
module.exports = router;
