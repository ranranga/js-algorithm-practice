// Slasher Flick

// slasher([1,2,3], 2); must return [3]

// Basic

function slasher(arr, num) {
    arr.splice(0, num);
    return arr;
}

// Intermediate

function slasher(arr, num) {
    return arr.slice(num);
}
