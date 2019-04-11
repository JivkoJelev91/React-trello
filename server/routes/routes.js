const mongoose = require('mongoose');
const Lanes = mongoose.model('Lanes');

module.exports = app => {
    app.get('/', (req, res) => {
        Lanes.find({})
            .then(lanes => {
                res.json({
                    lanes: lanes
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

        Lanes.findOne({
            id: id
        }).then((lanes) => {
            lanes.cards.push({
                id: title,
                title: title,
                description: description
            });

            lanes.save().then(() => {
                Lanes.find({})
                    .then(lanes => {
                        res.json({
                            lanes: lanes,
                        });
                    }).catch(err => console.log(err))
            })

        }).catch(err => console.log(err))
    })

    app.post('/update', (req, res) => {
        let {
            prevLane,
            nextLane,
            cardId
        } = req.query;

        Lanes.findOne({
            id: prevLane
        }).then((lanes) => {
            let movedCard = lanes.cards.pop();

            lanes.save();

            Lanes.findOne({
                id: nextLane
            }).then((lanes) => {
                lanes.cards.push(movedCard)
                lanes.save();
            });
        }).catch(err => console.log(err));
    })


    app.delete('/delete', (req, res) => {

        let { prevLane,nextLane } = req.query;

        Lanes.findOne({
            id: nextLane
        }).then((lanes) => {

            lanes.cards.map((lane, index) => {
                if (lane.id === prevLane) {
                    lanes.cards.splice(index, 1);
                }
            });

            lanes.save();

        }).catch(err => console.log(err))

    })

}