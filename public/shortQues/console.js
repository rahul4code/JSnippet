/* Ques 1 */
function test() {
  var hack1 = (hack2 = 100);
}
test();
console.log(typeof hack1 == "undefined"); // true
console.log(typeof hack2 !== "undefined"); // true
console.log(hack1, hack2); // ReferenceError: hack1 is not defined

/* Ques 2 */
async function a() {
  return await Promise.resolve("hi");
}
console.log(a()); // Promise { <pending> }
