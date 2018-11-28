// Confirm the ending
// 'Javascript', 't'

// Basic

function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
}


// Intermediate

function confirmEnding(str, target) {
    if (str.substr(str.length - target.length, str.length) != target) {
        return false;
    } else {
        return true;
    }
    return str;
}