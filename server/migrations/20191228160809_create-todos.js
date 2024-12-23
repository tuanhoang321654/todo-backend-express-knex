
exports.up = function (knex) {

    return knex.schema
        .createTable('user', function (table) {
            table.increments('id');
            table.string('name');
        }).createTable('organization', function (table) {
            table.increments('id');
            table.string('name');
            table.integer('userId');
        }).createTable('project', function (table) {
            table.increments('id');
            table.string('name');
            table.integer('userId');
            table.integer('organizationId');
        }).createTable('task', function (table) {
            table.increments('id');
            table.string('name');
            table.integer('userId');
            table.integer('projectId');
            table.integer('locationId');
        }).createTable('location', function (table) {
            table.increments('id');
            table.string('name');
            table.integer('projectId');
        });
};

exports.down = function (knex) {

};