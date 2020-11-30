const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

//Middleware 
app.use(bodyParser.json());


 
 const addPlayerRouter        = require('./routes/addPlayer');
 const attendedTechRouter     = require('./routes/attendedTech');
 const deletePlayerRouter     = require('./routes/deletePlayer');
 const fiveGamesRouter        = require('./routes/fiveGames');
 const fullRosterRouter       = require('./routes/fullRoster');
 const getPlayerRouter        = require('./routes/getPlayer');
 const rookieRouter           = require('./routes/rookies');
 const rosterByAgeRouter      = require('./routes/rosterByAge');
 const rosterByAgeDescRouter  = require('./routes/rosterByAgeDesc');
 const updatePlayerRouter     = require('./routes/updatePlayer');
 
 
//Middleware: Route Handlers
app.use('/addPlayer',addPlayerRouter);
app.use('/attendedTech',attendedTechRouter);
app.use('/deletePlayer',deletePlayerRouter);
app.use('/fiveGames',fiveGamesRouter);
app.use('/fullRoster', fullRosterRouter);
app.use('/getPlayer', getPlayerRouter);
app.use('/rookies',rookieRouter);
app.use('/rosterByAge',rosterByAgeRouter);
app.use('/rosterByAgeDesc',rosterByAgeDescRouter);
app.use('/updatePlayer',updatePlayerRouter);


//app.use(auth);n

// Route Handlers
app.get('/', (req, res) => {
    res.send('This is the homepage');
});


//Connect to MongoDB

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to MongoDB');
});

mongoose.set('debug', true);

// listen on port 3000
app.listen(3000);
