var initialLoginURL = '/api/v1/login';
var User = require('./../models/user');

module.exports = function (app, graph) {
    app.post(initialLoginURL, function (req, res) {
        console.log('Received the data');
        var data = req.body;

        var newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            id: data.id,
            imageURL: data.picture.data.url
        };

        User.create(newUser, function (err, user) {
            if (err) {
                console.log ("Error when creating user" + err);
                res.send(err).json("Error occurred");
            } else {
                console.log("User has been registered in the database");
                res.send(200).json("Received and added");
            }
        });

    });
};