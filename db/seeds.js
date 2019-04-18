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
    address: '54321 Poplar Street, Pittsburgh, PA 15230',
    phoneNumber: '(412) 555-7890',
    email: 'doglover@crittercastleburgh.com'
});

const jack = new Dog({
    name: 'Jack',
    age: '2 years',
    gender: 'male',
    breed: 'Jack Russell terrier',
    coatColor: 'brown and white',
    weight: 17,
    imgLink: 'https://dog.ceo/api/breed/terrier/russell/images/random',
    store: {poochPeddler}
});

const ingrid = new Dog({
    name: 'Ingrid',
    age: '11 months',
    gender: 'female',
    breed: 'whippet',
    coatColor: 'gray',
    weight: 28,
    imgLink: 'https://dog.ceo/api/breed/whippet/images/random',
    store: {critterCastle}
});

const fifi = new Dog({
    name: 'Fifi',
    age: '1 year',
    gender: 'female',
    breed: 'standard poodle',
    coatColor: 'white',
    weight: 30,
    imgLink: 'https://dog.ceo/api/breed/poodle/standard/images/random',
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