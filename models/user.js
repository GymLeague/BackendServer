var mongoose = require('mongoose');

var userSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    id: String,
    imageURL: String,
    unitPounds: {type: Boolean, default: true},
    weight: String,
    channels: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', userSchema);

