const mongoose = require('mongoose');
const Lanes = mongoose.model('Lanes');
const Cards = mongoose.model('Cards');

module.exports = app => {


    app.get('/', (req, res) => {
        console.log('bv');
        Lanes.find({})
            .then(lane => {
                console.log(lane);
                res.json({
                    lane: lane
                });
            })
            .catch(err => console.log(err))
    })

    app.post('/add/:id', (req, res) => {

        let id = req.params.id;
        let {
            title,
            description
        } = req.body;

        Cards.create({
            title,
            description
        }).then(card => {
            Lanes.findOne({_id: id}).then((lanes) => {
                res.json({
                    lanes: lanes,
                    card: card
                })
            })
        }).catch(err => console.log(err))
    });
}