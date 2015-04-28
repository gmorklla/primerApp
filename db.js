var mongoose = require('mongoose');
mongoose.connect('mongodb://gmorklla:22782278@ds059471.mongolab.com:59471/flights');

module.exports =  mongoose.connection;