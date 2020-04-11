const router = require("express").Router();
const factionController = require("../../controllers/FactionController");

// Matches with "/api/factions"
router.route("/")
  .get(factionController.findAll)
  .post(factionController.create);

// Matches with "/api/factions/:id"
router
  .route("/:id")
  .get(factionController.findById)

module.exports = router;
