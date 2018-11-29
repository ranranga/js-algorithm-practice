// Array Splitter

/*
   1. (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
   2. ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
   3. ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
   4. ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
*/

// Basic 

function arraySplitter(arr, size) {
    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) {
            temp.push(arr[a]);
        } else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);

    return result;
}

// Intermediate

function arraySplitter(arr, size) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i += size) {
        arr2.push(arr.slice(i, i+size));
    }

    return arr2;
}

// Advanced

function arraySplitter(arr, size) {
    var newArr = [];
    var i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i+size));
        i += size;
    }

    return newArr;
}
