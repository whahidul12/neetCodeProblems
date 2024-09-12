"use strict";

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let bool_isShopOpen = false;

let order = function (work, time) {
  return new Promise((resolve, reject) => {
    if (bool_isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Sorry our shop is closed!!!"));
    }
  });
};

order(() => {
  console.log(`${stocks.Fruits[0]} has beev selected`);
}, 2000)
  .then(() => {
    return order(() => {
      console.log(`do this`);
    }, 2000);
  })
  .then(() => {
    return order(() => {
      console.log(`do this 2`);
    }, 3000);
  })
  .then(() => {
    return order(() => {
      console.log(`do this 3`);
    }, 5000);
  })
  .then(() => {
    return order(() => {
      console.log(`do this 4`);
    }, 2000);
  })
  .then(() => {
    return order(() => {
      console.log(`do this 5`);
    }, 500);
  })
  .catch(() => {
    console.error(`shop is closed`);
  })
  .finally(() => {
    console.log(`present sir`);
  });
