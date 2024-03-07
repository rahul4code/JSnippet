let user = { name: "Rahul" };

function greetUser(greet) {
  console.log(`${greet} ${this.name}`);
}

const greetUser1 = greetUser.bind(user);
greetUser1("Hey");
