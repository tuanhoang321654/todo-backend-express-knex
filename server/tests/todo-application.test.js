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
const { exec } = require("child_process");

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

        it("create user, then orgranization, then project, then task, then assign atask", async () => {

            const user = getBody(await request.post('/api/user/create', { name: "new user" }));

            console.log('user --> ', user);

            const organization = getBody(await request.post('/api/organization/create', { userId: user.id, name: 'new org' }));

            console.log('organization --> ', organization);

            const project = getBody(await request.post('/api/project/create', { userId: user.id, organizationId: organization.id, name: 'new project' }));

            console.log('project --> ', project);

            const todoLocation = getBody(await request.post('/api/location/create', { projectId: project.id, name: 'todo' }));

            console.log('todoLocation --> ', todoLocation);

            const doingLocation = getBody(await request.post('/api/location/create', { projectId: project.id, name: 'doing' }));

            console.log('doingLocation --> ', doingLocation);

            const task = getBody(await request.post('/api/task/create', { userId: user.id, projectId: project.id, locationId: todoLocation.id, name: 'task 1' }));

            console.log('task --> ', task);

            const taskAfterTheMove = getBody(await request.post('/api/task/move', { id: task.id, locationId: doingLocation.id }));

            console.log('task --> ', taskAfterTheMove);

            expect(taskAfterTheMove.locationId).toBe(doingLocation.id);


        });
    });

});