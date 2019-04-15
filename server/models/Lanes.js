const mongoose = require('mongoose');

const LanesSchema = new mongoose.Schema({
    id:{
        type: String,
    },
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    cards: {
        type: Array
    },
});

const allLanes = ['Planned', 'WIP', 'Test', 'Completed', 'Archived'];

const Lanes = mongoose.model('Lanes', LanesSchema);

Lanes.getInit = async () => {
    try {
        let lanes = await Lanes.find();
        if (lanes.length > 0) return;

        return allLanes.map((lane) => {
            return Lanes.create({
                id: lane.toUpperCase(),
                name: lane.toUpperCase(),
                title: lane,
                cards: [],
            });
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = Lanes;