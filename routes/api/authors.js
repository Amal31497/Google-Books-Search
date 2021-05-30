const router = require("express").Router();
const authorController = require("../../controllers/authorsControllers");

router.route("/")
    .get(authorController.getAuthors)
    .post(authorController.saveAuthor)

module.exports = router;