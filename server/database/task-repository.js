const repositoryBase = require('./repository-base.js');

const tableName = 'task';

module.exports = {
    all: async function () { await repositoryBase.all(tableName) },
    get: async function (id) { await repositoryBase.get(tableName, id) },
    create: async function (properties) { await repositoryBase.update(tableName, properties) },
    update: async function (id, properties) { await repositoryBase.update(tableName, id, properties) },
    delete: async function (id) { await repositoryBase.delete(tableName, id) }
}