class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  //   This was not following Single responsibility principle to follow we should handle it in separate class
  //   saveToDatabase() {
  //     console.log("Logic for insertion");
  //   }

  //   authenticate(password) {
  //     console.log("Logic for authentication");
  //   }
}

class UserRepository {
  save(user) {
    // Save user to database
  }
}

// This is separate class for Auth service
class AuthService {
  authenticate(user, password) {
    // Authenticate user
  }
}
