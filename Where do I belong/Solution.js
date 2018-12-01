// Where do I belong
// ex - getIndexToIns([1, 2, 3, 4], 1.5) return 1 b/c greater than 1(index 0) and less than 2 (index 1)
// ex - getIndexToIns([20, 3, 5], 19) return 2 b/c once array is sorted it will look like [3, 5, 20]
// ex - getIndexToIns([20, 3, 5], 19) 19 is less than 20 (index 2) and greater than 5 (index 1)

// Basic

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a-b;
    });

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num) {
            return a;
        }
    }

    return arr.length;
}

// Basic 2

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a-b;
    });

    var i = 0;
    while (num > arr[i]) {
        i++;
    }

    return i;
}

// Intermediate 1

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){ return a-b; });
    return arr.indexOf(num);
}


// Intermediate 2

function getIndexToIns(arr, num) {
    var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum) => num <= currNum);

    return index === -1 ? arr.length : index;
}
