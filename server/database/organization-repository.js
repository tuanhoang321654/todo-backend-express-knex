const repositoryBase = require('./repository-base.js');

const tableName = 'organization';

module.exports = {
    all: function () { repositoryBase.all(tableName); },
    get: function (id) { repositoryBase.get(tableName, id); },
    create: function (properties) { repositoryBase.update(tableName, properties); },
    update: function (id, properties) { repositoryBase.update(tableName, id, properties); },
    delete: function (id) { repositoryBase.delete(tableName, id); }
}