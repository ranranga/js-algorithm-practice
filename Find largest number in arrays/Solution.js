// Find largest number in arrays

// Basic

var arr = [
    [123, 23, 45, 66],
    [345, 344, 346, 347],
    [34, 56, 67, 87 ]
];

function largestNumber(arr) {
    var result = [];
    for (var i=0; i<arr.length; i++) {
        var num = arr[i][0];
        for (var j=1; j<arr[i].length; j++) {
            if (arr[i][j] > num) {
                num = arr[i][j]
            }
        }
        result[i] = num;
    }

    return result;
}

// Intermediate

function largestNumber(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return (current > prev) ? current : prev;
        });
    });
}

// Advanced

function largestNumber(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}
