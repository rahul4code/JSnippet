let obj = { name: "Rahul" };

function greetUser(greet1, greet2) {
  console.log(`${greet1} ${this.name} ${greet2}`);
}

greetUser.apply(obj, ["Hey", "Welcome"]);
