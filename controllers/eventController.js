const Event = require('../models/Event.js');

const eventController = {
    index: (req, res) => {
        Event.find().then((events) => {
            res.json(events)
        });
    },
    create: (req, res) => {
        Event.create(req.body).then(event => {
            event.save()
            res.json(event);
        });
    },
    delete: (req, res) => {
        Event.findByIdAndDelete(req.params.eventId).then((event) => {
            res.json(event);
        });
    }
}

module.exports = eventController;