const projectRepository = require('./database/project-repository.js');

function createProject(req, data) {
  projectRepository.create({
    name: data.name,
    userId: data.organizationId,
    userId: data.userId,
  });

  const result = {
    name: data.name,
    userId: data.userId,
  };

  return req.send(result);
}

module.exports = {
  createProject: { method: createProject, errorMessage: "Could not project" },
};
