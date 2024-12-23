const locationRepository = require('./database/location-repository.js');

function createLocation(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  locationRepository.create({
    name: data.name,
    userId: data.organizationId,
    userId: data.userId,
  });

  const result = {
    name: data.name,
    userId: data.userId,
    projectId: data.projectId,
    locationId: data.locationId,
    url: `${protocol}://${host}/location/create`
  };

  return req.send(result);
}

module.exports = {
  createLocation: { method: createLocation, errorMessage: "Could not create location", url: 'location/create' },
};
