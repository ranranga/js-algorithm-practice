// Repeat a string
// 'javascript', -1, 4

// Basic

function repeatStringNTimes(str, n) {
    if (n > 0) {
        return str.repeat(n);
    }
}

// Intermediate

function repeatStringNTimes(str, n) {
    if (n < 0) return '';
    if ( n === 1 )
        return str;
    else
        return str + repeatStringNTimes(str, n - 1);
}
