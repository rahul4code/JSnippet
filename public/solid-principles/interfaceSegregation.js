// Not following ISP
class Worker {
  develop() {
    throw new Error("Method 'develop()' must be implemented.");
  }

  test() {
    throw new Error("Method 'test()' must be implemented.");
  }
}

class Developer extends Worker {
  develop() {
    console.log("Developing software...");
  }

  test() {
    // Not needed by Developer
  }
}

class Tester extends Worker {
  develop() {
    // Not needed by Tester
  }

  test() {
    console.log("Testing software...");
  }
}

// Followed Interface Segregation
// Define smaller, specific interfaces
class DeveloperWork {
  develop() {
    throw new Error("Method 'develop()' must be implemented.");
  }
}

class TesterWork {
  test() {
    throw new Error("Method 'test()' must be implemented.");
  }
}

// Implement specific interfaces in the relevant classes
class Developer extends DeveloperWork {
  develop() {
    console.log("Developing software...");
  }
}

class Tester extends TesterWork {
  test() {
    console.log("Testing software...");
  }
}
