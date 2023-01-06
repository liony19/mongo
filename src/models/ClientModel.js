const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
    id: ObjectId,
    nome: String,
    cpf: String,
    email: String

});

const ClientModel = mongoose.model('clientes', ClientSchema);

module.exports = ClientModel;