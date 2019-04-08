const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CardsSchema = new mongoose.Schema({
    id: { type: ObjectId, ref: 'Lanes',  },
    title: { type: String, },
    description: { type: String, },
});

const Cards = mongoose.model('Cards', CardsSchema);

module.exports = Cards;
