const projectRepository = require('./database/project-repository.js');

async function createProject(req, res) {

  const data = req.body;

  const project = await projectRepository.create({
    name: data.name,
    userId: data.organizationId,
    userId: data.userId,
  });

  const result = {
    name: project.name,
    id: project.id,
  };

  return res.send(result);
}

module.exports = {
  createProject: { method: createProject, errorMessage: "Could not project", url: "project/create" },
};
