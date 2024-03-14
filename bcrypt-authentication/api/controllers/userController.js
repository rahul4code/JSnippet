const user = require("../../models/user");

const getUsers = async (req, res) => {
  try {
    const userList = user.getUser();
    res.status(200).send(userList);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getUsers };
