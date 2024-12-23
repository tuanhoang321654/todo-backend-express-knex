const taskRepository = require('./database/task-repository.js');

function createTask(req, data) {

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
  };
}

function moveTask(req, data) {

  const task = taskRepository.update({
    name: data.name,
    locationId: data.locationId,
  });

  const result = {
    name: task.name,
    userId: task.userId,
    locationId: task.locationId,
  };

  return req.send(result);
}

function assignTask(req, data) {

  const task = taskRepository.update({
    name: data.name,
    userId: data.userId,
  });


  const result = {
    name: task.name,
    userId: task.userId,
  };

  return req.send(result);
}

function unassignTask(req, data) {
  const task = taskRepository.update({
    name: data.name,
    userId: 0,
  });

  const req = {
    name: task.name,
    taskId: task.Id,
  };

  return req.send(result);
}

module.exports = {
  createTask: { method: createTask, errorMessage: "Could not create task", url: 'task/create' },
  moveTask: { method: moveTask, errorMessage: "Could not move task", url: 'task/move' },
  assignTask: { method: assignTask, errorMessage: "Could not assign task", url: 'task/assign' },
  unassignTask: { method: unassignTask, errorMessage: "Could not unassign task", url: 'task/unassign' },
};
