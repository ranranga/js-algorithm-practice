// Factorial of a number
// Numbers 5, 6, 7

// Basic Solution

function factorial(num) {
    var factorial = 1;
    
    for (var i = num; i >= 1; i--) {
        factorial *= i;
    }

    return factorial;
}

// Intermediate Solution

function factorial(num) {
    if (num === 0) {
        return 1;
    }

    return num * factorial(num-1);
}

// Advanced Solution

function factorial(num) {
    for (var i = 1; num >= 1; num--) {
        i *= num;
    }

    return i;
}
