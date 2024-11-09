const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    healthStatus: String,
    status: { type: String, default: 'available' },
    shelterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Animal', animalSchema);
