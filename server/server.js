const app = require('./server-config.js');
const routes = require('./server-routes.js');

const port = process.env.PORT || 5000;

const urlBase = '/api/';

app.post(`${urlBase}${routes.createUser.url}`, routes.createUser.method);
app.post(`${urlBase}${routes.createOrganization.url}`, routes.createOrganization.method);
app.post(`${urlBase}${routes.createProject.url}`, routes.createProject.method);
app.post(`${urlBase}${routes.createTask.url}`, routes.createTask.method);
app.post(`${urlBase}${routes.moveTask.url}`, routes.moveTask.method);
app.post(`${urlBase}${routes.assignTask.url}`, routes.assignTask.method);
app.post(`${urlBase}${routes.unassignTask.url}`, routes.unassignTask.method);
app.post(`${urlBase}${routes.createLocation.url}`, routes.createLocation.method);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;