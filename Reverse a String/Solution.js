// Reverse a String
// Ex. "game" <=> "emag"
// Ex. "Football is a game"

//Basic Solution

function reverseString(str) {
    str = str.split('');
    str = str.reverse('');
    str = str.join('');

    return str;
}

// Intermediate Solution

function reverseString(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}


// Advanced Solution

function reverseString(str) {
    return str.split('').reverse().join('');
}
