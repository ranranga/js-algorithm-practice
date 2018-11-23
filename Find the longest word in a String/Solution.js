// Find the longeset word in a String
// Ex. "When bob is trying to learn Javascript"
// Ex. "Bob figured out the longest word is Pneumonoultramicroscopicsilicovolcanoconiosis"

// Simple Solution

function findLongestWord(str) {
    var words = str.split(' ');
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

// Intermediate Solution

function findLongestWord(str) {
    return str.split(' ').reduce(function(x, y) {
        return Math.max(x, y.length)
    }, 0);
}
