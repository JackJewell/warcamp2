const router = require("express").Router();
const factionRoutes = require("./factions");
const subFactionRoutes = require("./subfactions");
const unitRoutes = require("./units");
const listRoutes = require("./lists");
const userRoutes = require("./users")

// routes
router.use("/factions", factionRoutes);
router.use("/subfactions", subFactionRoutes);
router.use("/units", unitRoutes);
router.use("/lists", listRoutes);
router.use("/users", userRoutes);

module.exports = router;
