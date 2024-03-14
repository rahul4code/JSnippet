class User {
  constructor(props) {
    this.users = [];
  }

  getUser() {
    return this.users;
  }

  setUser(user) {
    this.users.push(user);
  }
}

module.exports = new User();
