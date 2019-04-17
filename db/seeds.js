const mongoose = require('./connection.js');
const Dog = require('../models/Dog.js');
const Store = require('../models/Store.js');
const Event = require('../models/Event.js');

const poochPeddler = new Store({
    name: 'Pooch Peddler',
    address: '12345 Observatory Avenue, Cincinnati, OH 45208',
    phoneNumber: '(513) 555-1234',
    email: 'poochpeddler1@poochpeddlerhydepark.com'
});

const critterCastle = new Store({
    name: 'Critter Castle',
    address: '',
    phoneNumber: '',
    email: ''
});

const jack = new Dog({
    name: 'Jack',
    age: 2,
    gender: 'male',
    breed: 'Jack Russell terrier',
    coatColor: 'brown and white',
    weight: 17,
    imgLink: 'https://dog.ceo/api/breed/terrier/russell/images/random',
    store: {poochPeddler}
});

const poochPalooza = new Event({
    title: 'Pooch Palooza',
    numAttendees: 50,
    date: 'June 7',
    time: '5 p.m. to 8 p.m.',
    description: 'A fun-filled dance party for canines and their owners!',
    store: {poochPeddler}
});