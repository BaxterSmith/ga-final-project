const Dog = require('../models/Dog.js');

const dogController = {
    index: (req, res) => {
        Dog.find().then((dogs) => {
            res.json(dogs)
        });
    },
    create: (req, res) => {
        Dog.create(req.body).then(dog => {
            dog.save()
            res.redirect('/');
        });
    },
    show: (req, res) => {
        let dogId = req.params.dogId;
        Dog.findById(dogId).then(dog => {
            res.json(dog)
        });
    },
}

module.exports = dogController;