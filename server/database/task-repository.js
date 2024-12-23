const repositoryBase = require('./repository-base.js');

const tableName = 'task';

module.exports = {
    all: async function () { return await repositoryBase.all(tableName) },
    get: async function (id) { return await repositoryBase.get(tableName, id) },
    create: async function (properties) { return await repositoryBase.create(tableName, properties) },
    update: async function (id, properties) { return await repositoryBase.update(tableName, id, properties) },
    delete: async function (id) { return await repositoryBase.delete(tableName, id) }
}