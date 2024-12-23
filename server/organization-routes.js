const organizationRepository = require('./database/organization-repository.js');

async function createOrganization(req, res) {

  const data = req.body;

  const organization = await organizationRepository.create({
    name: data.name,
    userId: data.userId,
  });

  const result = {
    name: organization.name,
    id: organization.id,
  };

  return res.send(result);
}

module.exports = {
  createOrganization: { method: createOrganization, errorMessage: "Could not organization", url: "organization/create" },
};
