const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

router.route("/")
    .get(booksController.findAllBooks)
    .post(booksController.saveBook);

router.route("/:id")
    .delete(booksController.removeBook)


module.exports = router;