const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const BioscoopSchema = new Schema({
    name: String,
    description: String
});

const Bioscoop = mongoose.model('bioscoop', BioscoopSchema);

const bioscoop1 = new Bioscoop({
    name: 'Zaal 1',
    description:'200 plekken',
}).save();

const bioscoop2 = new Bioscoop({
    name: 'Zaal 2',
    description:'150 plekken',
}).save();

const bioscoop3 = new Bioscoop({
    name: 'Zaal 3',
    description:'250 plekken',
}).save();

const bioscoop4 = new Bioscoop({
    name: 'Zaal 4',
    description:'300 plekken',
}).save();

module.exports = Bioscoop;