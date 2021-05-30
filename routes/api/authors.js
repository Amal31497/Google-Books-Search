const router = require("express").Router();
const authorController = require("../../controllers/authorsControllers");

router.route("/")
    .post(authorController.saveAuthor)

module.exports = router;