const mongoose = require('mongoose');
const Lanes = mongoose.model('Lanes');

module.exports = app => {

    // @get route    
    app.get('/', (req, res) => {
        Lanes.find({})
            .then(lanes => {
                res.json({
                    lanes: lanes
                });
            })
            .catch(err => console.log(err));
    })

    // @add route
    app.post('/add/:id', (req, res) => {
        let id = req.params.id;
        let { title, description } = req.body;

        Lanes.findOne({id: id})
             .then((lanes) => {
                lanes.cards.push({
                    id: title,
                    title: title,
                    description: description,
                });

                lanes.save()
                     .then(() => {
                        Lanes.find({})
                             .then(lanes => {
                                res.json({
                                    lanes: lanes,
                                });
                             }).catch(err => console.log(err));
                })

        }).catch(err => console.log(err));
    })

    // @update route
    app.post('/update', (req, res) => {
        let { prevLane,nextLane,cardId,movedIndex } = req.query;
        let movedCard;

        Lanes.findOne({name: prevLane})
             .then((lanes) => {
                lanes.cards.map((lane, index) => {
                    if (lane.id === cardId) {
                        lanes.cards.splice(index, 1); // Removing from old board
                        movedCard = lane;
                    }
                });

                lanes.save();

                Lanes.findOne({id: nextLane})
                     .then((lanes) => {
                        lanes.cards.splice(movedIndex, 0, movedCard) // Adding to new board
                        lanes.save();
                     });
        }).catch(err => console.log(err));
    })

    // @delete route
    app.delete('/delete', (req, res) => {
        let { prevLane,nextLane } = req.query;

        Lanes.findOne({id: nextLane})
             .then((lanes) => {

                lanes.cards.map((lane, index) => {
                    if (lane.id === prevLane) {
                        lanes.cards.splice(index, 1); 
                    }
                });

                lanes.save();

        }).catch(err => console.log(err))
    })
}