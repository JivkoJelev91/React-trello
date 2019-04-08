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
            cardStyle,
            description
        } = req.body;

        // Lanes
        // .findOne({_id: id})
        // .then(lanes => {
        //     Cards.create({
        //         title,
        //         cardStyle: {},
        //         description
        //     }).then(created => {
        //         Lanes
        //         .findOne({_id: id})
        //         .populate('Cards').then(card => {
        //             console.log(card);
        //             res.json({
        //                 card: card
        //             })
        //         })

        //     }).catch(err => console.log(err))
        // })
        // .catch(err => console.log(err))
        Cards.create({
            title,
            description
        }).then(card => {
            res.json({
                card: card
            })
        }).catch(err => console.log(err))




        // id: { type: String,  },
        // title: { type: String, },
        // cards: { type: Array },
        // let {
        //     title,
        //     technologies,
        //     budget,
        //     description,
        //     contact_email
        // } = req.body;

        // // Validate Fields
        // let errors = [];
        // errors = errorHandler(errors,req.body);

        // // Check for erros
        // if(errors.length > 0){
        //     res.json({
        //         errors: errors,
        //         title : title,
        //         technologies: technologies,
        //         budget: budget,
        //         description: description,
        //         contact_email: contact_email
        //     });
        // }else{
        //     !budget ? budget = 'Unknown': budget =`$${budget}`;
        //     technologies = technologies.toLowerCase().replace(/, /g, ',');

        //     Gig.create({
        //         title,
        //         technologies,
        //         budget,
        //         description,
        //         contact_email
        //     })
        //     .then(gig => {
        //         res.json({
        //             succsses: true
        //         });
        //     })
        //     .catch(err => console.log(err))
        // }
    });
}