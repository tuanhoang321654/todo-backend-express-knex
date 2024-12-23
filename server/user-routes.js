const userRepository = require('./database/user-repository.js');

function createUser(req, data) {
  userRepository.create({
    name: data.name
  });

  const result = {
    name: data.name
  };

  return req.send(result);
}

module.exports = {
  createUser: {    
    method: createUser, errorMessage: "Could create user"
  },
};
