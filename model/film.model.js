const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
});

const Film = mongoose.model('film', FilmSchema);

const film1 = new Film({
    name: 'Murder on the orient express',
    description:'Er wordt iemand vermoord op de trein',
    imagePath:'https://images-na.ssl-images-amazon.com/images/M/MV5BNGFmM2NmYjYtMjAwNy00ZDkzLWI3ZWMtOGZhOTRhYzQwMTA0XkEyXkFqcGdeQXVyNzU2MzMyNTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
});//.save();
const film2 = new Film({
    name: 'The boss baby',
    description:'Een baby is een geheim agent',
    imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Boss_Baby_poster.jpg'
});//.save();
module.exports = Film;
