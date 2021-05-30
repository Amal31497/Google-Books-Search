const db = require("../models");

module.exports = {
    findAllBooks: function(req,res) {
        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findBookById: function (req, res) {
        db.Book
            .findById(req.params.id)
            .populate("authors")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    saveBook: function(req,res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    removeBook: function (req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}