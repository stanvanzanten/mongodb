const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const BioscoopSchema = new Schema({
    name: String,
    description: String
});

const Bioscoop = mongoose.model('bioscoop', BioscoopSchema);

const bioscoop1 = new Bioscoop({
    name: 'Tilburg',
    description:'Een gezellige bioscoop in het hartje van tilburg!',
});//.save();

module.exports = Bioscoop;