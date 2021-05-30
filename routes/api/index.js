const router = require("express").Router();
const bookRoutes = require('./books');
const authorRoutes = require("./authors")

router.use("/books", bookRoutes)
router.use("/authors", authorRoutes)

module.exports = router;