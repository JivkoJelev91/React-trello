const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Lanes = require('../models/Lanes');

const uri = 'mongodb://localhost:27017/react-sprello' 

mongoose.connect(uri).then(
    () => { 
        console.log('Connected to Mongo');
        Lanes.getInit().then(() => {
            console.log('Database ready');                
        }).catch((reason) => {
            console.log('Something went wrong');
            console.log(reason);
        });
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
        }
  );

module.exports = mongoose.connection;