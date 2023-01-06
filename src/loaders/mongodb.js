const mongoose = require('mongoose')

async function startDB(){
    await mongoose.connect('mongodb+srv://liony19:liony199@cluster0.shhsn8f.mongodb.net/test');
}

module.exports = startDB;