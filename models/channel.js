var mongoose = require('mongoose');

var channelSchema = new mongoose.Schema ({
    users: [],
    isPrivate: {type: Boolean, default: true},
    title: String
});

module.exports = mongoose.models('Channel', channelSchema);