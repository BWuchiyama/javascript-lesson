let text = '私のニックネームは内山です。年齢は20歳です。'
console.log(text);

const languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];

const like = languages[0];
const next = languages[3];

console.log(`私の好きな言語は${like}です。次は${next}を勉強してみたいです。`);

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

 user.birthday = '2000-09-27';

console.log(user.age);
 console.log(user.birthday);

user.sayHello = function(){
console.log("Hello!")
};

user.sayHello();

let playerList = [
  {
    _name: 'John',
    get name() {
      return this._name;
    },
    set name(value) {
      this._name = value;
    },
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
]

console.log(playerList[1].favorites[1]);

let total = playerList[0].age+ playerList[1].age+ playerList[2].age;

let average = total / playerList.length;

console.log(average);

function sayHello(){
console.log("Hello");
}
sayHello();

let sayWorld = function(){
  console.log("World");
}

sayWorld();

let calc = {};

calc.add = function (x, y) {
console.log(x+y);
};

calc.subtract = function (x, y) {
console.log(x-y);  
};

calc.multiply = function (x, y) {
console.log(x*y);  
};

calc.divide = function (x, y) {
console.log(x/y);
};

calc.add(3,4);
calc.subtract(14,4);
calc.multiply(7,7);
calc.divide(25,5);

function remainder(x, y) {
return x % y;
}
const result = remainder(5, 3);

console.log("5は3で割った余りは " + result + "です。");





console.log(Math.floor(Math.random() * 10));

setTimeout(function() {
console.log("Hello World!");
}, 3000);

function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName("内山", addIntro);

let num = 0;

if (num > 0) {
  console.log("num is greater than 0")
} else if (num < 0){
  console.log("num is less than 0");
} else {
  console.log("num is 0")
}

let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
} 

console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  const item = mixed[i];

  if (typeof item === "number") {
    if (item % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  } else {
    console.log("not number");
  }
}

fooの関数スコープ何ではないと参照できないため外からxを参照できずにエラーになる
