module.exports = function (app, graph) {
    console.log("Initializing all routes");
    require('./userInformationRoute')(app, graph);
    console.log('All routes initialized');
};
