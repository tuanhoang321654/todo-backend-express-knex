const knex = require("./connection.js");


async function all() {
    return knex(tableName);
}

async function get(id) {
    const results = await knex(tableName).where({ id });
    return results[0];
}

async function create(...properties) {
    const results = await knex(tableName).insert({ ...properties }).returning('*');
    return results[0];
}

async function update(id, properties) {
    const results = await knex(tableName).where({ id }).update({ ...properties }).returning('*');
    return results[0];
}

// delete is a reserved keyword
async function del(id) {
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