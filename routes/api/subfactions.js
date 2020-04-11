const router = require("express").Router();
const subFactionController = require("../../controllers/SubFactionController");

// Matches with "/api/subfactions"
router.route("/")
  .get(subFactionController.findAll)
  .post(subFactionController.create);

// Matches with "/api/subfactions/:id"
router.route("/:id")
  .get(subFactionController.findById)

// Matches with "/api/subfactions/all/:mainFaction"
router.route("/all/:mainFaction")
  .get(subFactionController.findByFaction)
 
module.exports = router;
