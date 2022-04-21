var myArray = [123, 15, 187, 32];

// writing it out fully
myArray.forEach(function (val, i) {
    console.log('%d: %s', i, val);
});

// or with arrow function
myArray.forEach((val, i) => {
    console.log('%d: %s', i, val);
});