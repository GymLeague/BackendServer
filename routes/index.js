module.exports = function (app) {
    require('./userInformationRoute')(app);
    require('./channelRoute')(app);
};
