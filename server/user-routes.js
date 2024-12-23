const userRepository = require('./database/user-repository.js');

function createUser(req, data) {
  const protocol = req.protocol,
    host = req.get('host');

  userRepository.create({
    name: data.name
  });

  return {
    name: data.name,
    url: `${protocol}://${host}/user/create`
  };
}

module.exports = {
  createUser: { method: createUser, errorMessage: "Could create user" },
};
