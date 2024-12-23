const locationRepository = require('./database/location-repository.js');

async function createLocation(req, res) {

  const data = req.body;

  const location = await locationRepository.create({
    name: data.name,
    userId: data.organizationId,
    userId: data.userId,
  });

  const result = {
    name: location.name,
    id: location.id,
  };

  return res.send(result);
}

module.exports = {
  createLocation: { method: createLocation, errorMessage: "Could not create location", url: 'location/create' },
};
