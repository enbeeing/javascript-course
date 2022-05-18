'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeivery: function({
    starterIndex = 2,
    mainIndex = 0,
    time = '19:00',
    address,}){
    console.log(`Order received! 
    ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    wil be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIng, ...otherIng){
    let pizzaOrder = `A pizza with ${mainIng}`;
    otherIng.forEach(ing => {
      pizzaOrder += `, ${ing}`
    });
    console.log(pizzaOrder);
  },
};

// logical operators: use, return any datatype, short-circuting
console.log(`---- OR ----`);
console.log( 3 || 'Jon');
console.log('' || 'Jon');
console.log(true || 0);
console.log(false || 0);
console.log(0 || false);
console.log(undefined || null);
console.log(null || undefined);
console.log(undefined || 0 || null || '' || 4);
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
console.log(`---- AND ----`);

// // rest function
// const add = function(...numbers){
//   let sum = 0;
//   numbers.forEach(num => {
//     sum += num;
//   });
//   console.log(sum);
// };
// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4);
// const x = [23,5,7];
// add(...x);

// restaurant.orderPizza('onion', 'pineapple', 'peppers', 'artichoke','mushroom', 'corn');
// restaurant.orderPizza('pineapple');

// spread (on right side of =)
// const arr = [1,2, ...[3,4]];
// // rest (on left side of =)
// const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const [pizza,,Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza,Risotto,otherFood);
// in obj
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // spread 
// const arr = [7,8,9];

// const newArr = [1,2, ...arr];
// console.log(newArr, ...newArr);

// const newMenu = [...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);

// // copy arr
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arr
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // iterable: array, string, map, set. NOT obj
// const strABC = 'abcdefghijklmnopqrstuvwxyzæøå';
// const lettersABC = [...strABC];
// console.log(strABC);
// console.log(...strABC);

// // const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), 
// // prompt(`Ingredient 2?`), 
// // prompt(`Ingredient 3?`)];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);
// // objects
// const newResturant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newResturant);

// const  resturantCopy = {...restaurant};
// resturantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name, resturantCopy.name);

// // destructureing objects
// restaurant.orderDeivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDeivery({
//   address: 'Via del Sole, 21',
// });

// const {name, openingHours} = restaurant;
// console.log(name, openingHours);
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);
// // default values
// const {menu: menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);
// // mutating variables
// let e = 111;
// let t = 999;
// const obj = {e: 23, t: 7, u:14};
// ({e,t} = obj);
// console.log(e,t);
// // nested obj
// const {openingHours: {fri: {open, close}}} = restaurant;
// console.log(open,close);

// //destructuring arrays
// // switching varibles
// let [,,x,y] = restaurant.categories;
// console.log(x, y);
// [x,y] = [y,x];
// console.log(x,y)

// // recieve 2 return values from function
// const [starter, main] = restaurant.order(2,0);
// console.log(starter, main);

// // nested destructuring
// const nested = [2,4,[5,6]];
// const [i, ,j] = nested;
// console.log(i,j);
// const [a,,[b,console.log('');]] = nested;
// console.log(a,b,console.log(''););

// // default values
// const[p = 1,q = 1,r = 1] = [8,9];
// console.log(p,q,r);