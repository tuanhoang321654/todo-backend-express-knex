const app = require('./server-config.js');
const routes = require('./server-routes.js');

const port = process.env.PORT || 5000;

const urlBase = '/';

app.post(`${urlBase}${routes.createUser.url}`, routes.createUser);
app.post(`${urlBase}${routes.createOrganization.url}`, routes.createOrganization);
app.post(`${urlBase}${routes.createProject.url}`, routes.createProject);
app.post(`${urlBase}${routes.createTask.url}`, routes.createTask);
app.post(`${urlBase}${routes.moveTask.url}`, routes.moveTask);
app.post(`${urlBase}${routes.assignTask.url}`, routes.assignTask);
app.post(`${urlBase}${routes.unassignTask.url}`, routes.unassignTask);
app.post(`${urlBase}${routes.createLocation.url}`, routes.createLocation);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;