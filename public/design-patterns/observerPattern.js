class LoginObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  removeObserver(func) {
    this.observers = this.observers.filter((func) => func !== func);
  }

  notify(value) {
    this.observers.forEach((observer) => observer(value));
  }
}

const loginObserver = new LoginObserver();

const logSuccess = (user) => {
  console.log(`User ${user} has successfully logged in.`);
};

const notifyAdmin = (user) => {
  console.log(`Admin notified: ${user} logged in.`);
};

const updateDashboard = (user) => {
  console.log(`Dashboard updated with ${user}'s login.`);
};

loginObserver.subscribe(logSuccess);
loginObserver.subscribe(notifyAdmin);
loginObserver.subscribe(updateDashboard);

console.log("First notification:");
loginObserver.notify("Alice");

// Remove an observer
loginObserver.removeObserver(notifyAdmin);

// Notify observers again
console.log("Second notification after removing notifyAdmin:");
loginObserver.notify("Bob");
