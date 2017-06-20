var controller = require('./controller');

module.exports = function (app) {
	app.use('/api/user', controller.user)
}