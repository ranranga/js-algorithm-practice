// Pallindrome Checker
// civic, radar

function pallindrome(str) {
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // reverse removeChar for comparison
    var checkPalindrome = removeChar.split('').reverse().join('');

    // check str is a Palindrome
    if(removeChar === checkPalindrome) {
        return true;
    }

    return false;
}