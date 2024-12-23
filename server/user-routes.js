const userRepository = require('./database/user-repository.js');

async function createUser(req, res) {
  const data = req.body;

  const user = await userRepository.create({
    name: data.name
  });

  const result = {
    name: user.name,
    id: user.id,
  };

  return res.send(result);
}

module.exports = {
  createUser: {
    method: createUser, errorMessage: "Could create user", url: 'user/create'
  },
};
