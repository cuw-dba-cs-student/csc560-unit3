const mongoose = require('mongoose');

const collegeSchema = mongoose.Schema(
    {Univ: String},
    {_id:false} 
);

const playerSchema = mongoose.Schema(
    {
        No: {type: Number,required: true},
        Name: String,
        Age: Number,
        Pos: String,
        "Games Played": Number,
        "Games Started": Number,
        Wt: Number ,
        College: collegeSchema,
        BirthDate: String,
        "Yrs in NFL": String, 
        "Salary": String
    },
    {collection: 'roster'});

// Mongoose automatically looks for the plural, lowercased version of your model name
module.exports = mongoose.model('Roster',playerSchema);
