function HouseKeeper(name, age) {
  this.name = name;
  this.age = age;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

var housekeeper1 = {
  name: "Andrea",
  age: "23"
};
console.log(housekeeper1.name);
