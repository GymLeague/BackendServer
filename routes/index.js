var userInformationRoute = require('./userInformationRoute');

module.exports = function (app, graph) {
    userInformationRoute(app, graph);
};