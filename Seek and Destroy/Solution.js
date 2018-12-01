// Seek and Destroy

// Basic

var initialArr = [11, 23, 83, 41, 95, 36, 77, 81, 99];
var newArr = [11, 33, 88, 41, 77, 8, 4, 10];

function destroyer(arr, arr1) {
    var args = arr.slice.call(arr1);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

// Intermediate

function destroyer(arr, arr1) {
    var args = arr.slice.call(arr1);
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}
