const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TituloSchema = new Schema({
    id: ObjectId,
    nome: String,
    autor: String

});

const TituloModel = mongoose.model('Titulo', TituloSchema);

module.exports = TituloModel;