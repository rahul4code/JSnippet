let my_module = (function () {
  let private_var = "225001";

  return {
    getPincode: function () {
      return private_var;
    },
  };
})();

console.log(my_module.getPincode());
