const taskRepository = require('./database/task-repository.js');

async function createTask(req, res) {

  const data = req.body;

  const task = await taskRepository.create({
    name: data.name,
    projectId: data.projectId,
    userId: data.userId,
  });

  const result = {
    name: task.name,
    userId: task.userId,
    projectId: task.projectId,
    locationId: task.locationId,
  };

  return res.send(result);
}

async function moveTask(req, res) {

  const data = req.body;

  const task = await taskRepository.update(data.id, {
    locationId: data.locationId,
  });

  const result = {
    name: task.name,
    userId: task.userId,
    projectId: task.projectId,
    locationId: task.locationId,
  };

  return res.send(result);
}

async function assignTask(req, res) {

  const data = req.body;

  const task = await taskRepository.update(data.id, {
    userId: data.userId,
  });


  const result = {
    name: task.name,
    userId: task.userId,
    projectId: task.projectId,
    locationId: task.locationId,
  };

  return res.send(result);
}

async function unassignTask(req, res) {

  const data = req.body;

  const task = await taskRepository.update(data.id, {
    userId: 0
  });

  const result = {
    name: task.name,
    userId: task.userId,
    projectId: task.projectId,
    locationId: task.locationId,
  };

  return res.send(result);
}

module.exports = {
  createTask: { method: createTask, errorMessage: "Could not create task", url: 'task/create' },
  moveTask: { method: moveTask, errorMessage: "Could not move task", url: 'task/move' },
  assignTask: { method: assignTask, errorMessage: "Could not assign task", url: 'task/assign' },
  unassignTask: { method: unassignTask, errorMessage: "Could not unassign task", url: 'task/unassign' },
};
