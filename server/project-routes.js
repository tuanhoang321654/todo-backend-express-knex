const projectRepository = require('./database/project-repository.js');

function createProject(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  projectRepository.create({
    name: data.name,
    userId: data.organizationId,
    userId: data.userId,
  });

  return {
    name: data.name,
    userId: data.userId,
    url: `${protocol}://${host}/project/create`
  };
}

module.exports = {
  createProject: { method: createProject, errorMessage: "Could not project" },
};
