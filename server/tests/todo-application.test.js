/*
    Tests taken from the todo-backend spec located at:
    https://github.com/TodoBackend/todo-backend-js-spec/blob/master/js/specs.js
    
    And transcribed from Mocha/Chai to Jest with async/await/promises and other ES6+ features
    for ease of extension of this project (any additional testing).
*/
process.env.NODE_ENV = 'test';
const _ = require("lodash");
const url = require('url');

const knex = require("../database/connection.js");

const request = require('./util/httpRequests.js');

// Relative paths are used for supertest in the util file.
const getBody = response => response.body;

describe(`Todo-Backend API residing at http://localhost:${process.env.PORT}`, () => {

    async function cleanupDb() {
        await knex('user').del().returning('*');
        await knex('organization').del().returning('*');
        await knex('project').del().returning('*');
        await knex('task').del().returning('*');
        await knex('location').del().returning('*');
    }


    describe("task managemment tests", () => {
        beforeEach(async () => {
            await cleanupDb();
        });

        it("create user correctly", async () => {

            const user = { name: "new user" };

            var postResult = await request.post('/user/create', user);

            console.log(postResult);


        });
    });    

});