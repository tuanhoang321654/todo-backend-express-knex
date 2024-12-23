const knex = require("./connection.js");


async function all(tableName) {
    return knex(tableName);
}

async function get(tableName, id) {
    const results = await knex(tableName).where({ id });
    return results[0];
}

async function create(tableName, properties) {
    const results = await knex(tableName).insert({ ...properties }).returning('*');
    return results[0];
}

async function update(tableName, id, properties) {
    const record = (await knex(tableName).where({ id }))[0];

    const updatedRecord = { ...record, ...properties };

    const results = await knex(tableName).where({ id }).update(updatedRecord).returning('*');
    return results[0];
}

// delete is a reserved keyword
async function del(tableName, id) {
    const results = await knex(tableName).where({ id }).del().returning('*');
    return results[0];
}

module.exports = {
    all,
    get,
    create,
    update,
    delete: del,
}