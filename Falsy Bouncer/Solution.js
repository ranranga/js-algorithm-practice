// Falsy Bouncer
// Falsy values: false, null, 0, "", undefined, and Nan

var falsy = [o, 1, 2, 3, null, 5, "", 7, 8, undefined, NaN, 12, 13, false];

function bouncer(arr) {
    return arr.filter(Boolean);
}
