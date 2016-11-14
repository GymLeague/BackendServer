var initialLoginURL = '/api/v1/login';
var updateUserURL = 'api/v1/updateUser';
var deleteUserURL = 'api/v1/deleteUser';
var User = require('./../models/user');

module.exports = function (app) {
    app.post(initialLoginURL, function (req, res) {
        var data = req.body;

        var newUser = {
            firstName: data.first_name,
            lastName: data.last_name,
            id: data.id,
            imageURL: data.image.data.url
        };

        User.create(newUser, function (err, user) {
            if (err) {
                console.log("Error when creating user" + err);
                res.send(err).send("Error occurred");
            } else {
                console.log("User has been registered in the database");
                res.status(200).send("Received and added");
            }
        });

    });

    app.post(updateUserURL, function (req, res) {
        var data = req.body;
        var id = data.id;

        User.findOne({'id' : id}, function (err, user) {
            if (err) {
                res.status(500).send("Error occurred while retrieving user from db");
            }
            else if (user) {

            } else {
                res.status(502).send("Could not find user id in the database");
            }
        });
    });

    app.delete(deleteUserURL, function (req, res) {
        var data = req.body;
        var id = data.id;

        User.findOne({'id' : id}, function (err, user) {
            if (user){
                user.remove();
                res.status(200)
            } else {
                res.send(error).status(500)
            }
        });
    });

};