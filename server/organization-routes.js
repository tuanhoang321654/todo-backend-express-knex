const organizationRepository = require('./database/organization-repository.js');

function createOrganization(req, data) {
  organizationRepository.create({
    name: data.name,
    userId: data.userId,
  });

  const result = {
    name: data.name,
    userId: data.userId,
  };

  return req.send(result);
}

module.exports = {
  createOrganization: { method: createOrganization, errorMessage: "Could not organization" },
};
