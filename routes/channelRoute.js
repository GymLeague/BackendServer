var Channel = require('./../models/channel');
var User = require('./../models/user');

var createRouteURL = '/api/v1/createChannel';

addChannelToUsers = function AddChannelToUsers(channelId, users) {
    for (i = 0; i < users.length; ++i) {
        User.findOne({'id': users[i]}, function (err, user) {

            if (err) {
                console.log("Error while trying to add channel to user with user id " + users[i]);
            } else {
                user.channel.push(channelId);
                user.save();
            }
        });
    }
};

module.exports = function (app) {

    app.post(createRouteURL, function (req, res) {
        data = req.body;
        userId = req.body.userId;
        users = data.users;
        data.users.append(userId);

        var newChannel = {
            title: data.title,
            isPrivate: data.isPrivate,
            users: users
        };

        Channel.create(newChannel, function (err, channel) {

            if (err) {
                console.log("Error occurred while creating new channel");
                res.send(err);
            } else {
                console.log("Channel has been registered in the database");
            }
            channelId = channel._id;
            addChannelToUsers(channelId, users);
            res.send(channelId).status(200);
        });
    });

};