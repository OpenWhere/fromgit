'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users.server.controller');
    var systems = require('../../app/controllers/systems.server.controller');

    // Systems Routes
    app.route('/systems')
        .get(systems.list)
        .post(users.requiresLogin, systems.create);

    app.route('/systems/:systemId')
        .get(systems.read)
        .put(users.requiresLogin, systems.hasAuthorization, systems.update)
        .delete(users.requiresLogin, systems.hasAuthorization, systems.delete);

    // Finish by binding the System middleware
    app.param('systemId', systems.systemByID);
};
