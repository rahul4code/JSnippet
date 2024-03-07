let obj = { name: "Rahul" };

function greetUser(greet) {
  console.log(`${greet} ${this.name}`);
}

greetUser.call(obj, "Good Morning");
