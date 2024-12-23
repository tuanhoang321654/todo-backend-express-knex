const taskRepository = require('./database/task-repository.js');

function createTask(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  taskRepository.create({
    name: data.name,
    userId: data.organizationId,
    userId: data.userId,
  });

  return {
    name: data.name,
    userId: data.userId,
    projectId: data.projectId,
    locationId: data.locationId,
    url: `${protocol}://${host}/task/create`
  };
}

function moveTask(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  const task = taskRepository.update({
    name: data.name,
    locationId: data.locationId,
  });

  return {
    name: task.name,
    userId: task.userId,
    locationId: task.locationId,
    url: `${protocol}://${host}/task/move`
  };
}

function assignTask(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  const task = taskRepository.update({
    name: data.name,
    userId: data.userId,
  });

  return {
    name: task.name,
    userId: task.userId,
    url: `${protocol}://${host}/task/assign`
  };
}

function unassignTask(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  const task = taskRepository.update({
    name: data.name,
    userId: 0,
  });

  return {
    name: task.name,
    taskId: task.Id,
    url: `${protocol}://${host}/task/unassign`
  };
}

module.exports = {
  createTask: { method: createTask, errorMessage: "Could not create task" },
  moveTask: { method: moveTask, errorMessage: "Could not move task" },
  assignTask: { method: assignTask, errorMessage: "Could not assign task" },
  unassignTask: { method: unassignTask, errorMessage: "Could not unassign task" },
};
