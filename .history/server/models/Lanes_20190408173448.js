const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanesSchema = new mongoose.Schema({
    name: { type: String,  },
    title: { type: String, },
});

const allLanes = ['Planned Tasks', 'Work in progress', 'Test', 'Completed', 'Archived'] 

const Lanes = mongoose.model('Lanes', LanesSchema);

Lanes.getInit = async () => {
    try {
        let lanes = await Lanes.find();
        if (lanes.length > 0) return;

        return allLanes.map(lane => {
            return Lanes.create({
                name: lane.toUpperCase(),
                title: lane,
            });
        });
      
    } catch (e) {
        console.log(e);
    }
}

module.exports = Lanes;
  