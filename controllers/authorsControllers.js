const db = require("../models");

module.exports = {
    saveAuthor: function(req,res) {
        db.Author
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}