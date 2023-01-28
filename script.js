'use strict';

//1.

const car = {
  type: 'electric',
  wheels: 4,
};

const sportCar = {
  doors: 2,
};
//1.1
Object.setPrototypeOf(sportCar, car);
//1.2
const passengerCar = {
  doors: 4,
};
Object.setPrototypeOf(passengerCar, car);
//1.3
const toyCar = {
  type: 'toy',
};
Object.setPrototypeOf(toyCar, sportCar);

//2.

const emploees = {
  wallet: {},
  pay(month, sum) {
    this.wallet[month] = sum;
  },
};

const frontendDeveloper = {
  name: 'Mike',
  wallet: {},
};

Object.setPrototypeOf(frontendDeveloper, emploees);

const backendDeveloper = {
  name: 'Bob',
  wallet: {},
};

Object.setPrototypeOf(backendDeveloper, emploees);

backendDeveloper.pay('june', 1500);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);

//3.

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user_1 = new User('Mike', 18);

const user_2 = Object.create(user_1);
user_2.name = 'Bob';
user_2.age = 25;

console.log(user_2);

//4.

function UserType(name) {
  for (let i = 0; i < name.length; i++) {
    this[i] = name[i];
    if (i + 1 === name.length) {
      Object.defineProperty(this, 'length', {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  };
  this.join = Array.prototype.join;

}

const admins = new UserType(['Mike', 'Bob', 'Nikola']);
console.log(admins.join('; '));
