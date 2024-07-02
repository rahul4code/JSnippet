// Before following DIP
// UserService directly depends on the UserRepository class, which tightly couples the two components.

class UserRepository {
  getUser(userId) {
    // Fetch user from database
    return { id: userId, name: "John Doe" };
  }
}

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  getUser(userId) {
    return this.userRepository.getUser(userId);
  }
}

// After following DIP
// Define an abstraction
class IUserRepository {
  getUser(userId) {
    throw new Error("Method 'getUser()' must be implemented.");
  }
}

// Implement the abstraction
class UserRepository extends IUserRepository {
  getUser(userId) {
    // Fetch user from database
    return { id: userId, name: "John Doe" };
  }
}

// UserService depends on abstraction rather than a concrete class
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getUser(userId) {
    return this.userRepository.getUser(userId);
  }
}

// Usage
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
console.log(userService.getUser(1));
