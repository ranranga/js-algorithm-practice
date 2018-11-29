// Truncate a string
// 'Javascript', 2, 3, 6

// Basic

function truncateString(str, num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

// Intermediate

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
    return str;
}
