const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ISBNSchema = new Schema({
    id: ObjectId,
    isbn: String

});

const ISBNModel = mongoose.model('ISBN', ISBNSchema);

module.exports = ISBNModel;