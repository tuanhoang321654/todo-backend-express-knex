const organizationRepository = require('./database/organization-repository.js');

function createOrganization(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  organizationRepository.create({
    name: data.name,
    userId: data.userId,
  });

  return {
    name: data.name,
    userId: data.userId,
    url: `${protocol}://${host}/organization/create`
  };
}

module.exports = {
  createOrganization: { method: createOrganization, errorMessage: "Could not organization" },
};
