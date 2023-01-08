const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EditoraSchema = new Schema({
    id: ObjectId,
    nome: String,
    contato: String

});

const EditoraModel = mongoose.model('Editora', EditoraSchema);

module.exports = EditoraModel;