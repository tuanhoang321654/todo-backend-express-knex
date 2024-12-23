const taskRepository = require('./database/task-repository.js');

function updateTask(req, data) {
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

function updateMove(req, data) {
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

function assign(req, data) {
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

function unassign(req, data) {
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
  createProject: { method: updateTask, errorMessage: "Could not create task" },
  updateMove: { method: updateMove, errorMessage: "Could not move task" },
  assign: { method: assign, errorMessage: "Could not assign task" },
  unassign: { method: unassign, errorMessage: "Could not assign task" },
};
