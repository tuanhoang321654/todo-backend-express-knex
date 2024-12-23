const _ = require('lodash'); // redundant?

const userRoute = require('./user-routes.js');
const organizationRoute = require('./organization-routes.js');
const projectRoute = require('./project-routes.js');
const taskRoute = require('./task-routes.js');
const locationRoute = require('./location-routes.js');

function addErrorReporting(func, message) {
  return async function (req, res) {
    try {
      return await func(req, res);
    } catch (err) {
      console.log(`${message} caused by: ${err}`);

      // Not always 500, but for simplicity's sake.
      res.status(500).send(`Opps! ${message}.`);
    }
  }
}

const toExport = {
  ...userRoute,
  ...organizationRoute,
  ...projectRoute,
  ...taskRoute,
  ...locationRoute,
}

// for (const route in toExport) {
//   toExport[route] = addErrorReporting(toExport[route].method, toExport[route].errorMessage);
// }

module.exports = toExport;
