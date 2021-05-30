const db = require("../models");

module.exports = {
    getAuthors: function(req,res) {
        db.Author
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    saveAuthor: function(req,res) {
        db.Author
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}