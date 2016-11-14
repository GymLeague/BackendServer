var mongoose = require('mongoose');

var channelSchema = new mongoose.Schema ({
    users: [],
    isPrivate: {type: Boolean, default: true},
    title: String
});

module.exports = mongoose.model('Channel', channelSchema);