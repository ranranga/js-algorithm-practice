// Mutations
// Ex ["javascript", "Javascript"] true, ["jquery", "css"] false

// Basic
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) === -1) {
            return false;
        }
    }
    return true;
}

// Intermediate
function mutation(arr) {
    return arr[1].toLowerCase().split('').every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
    })
}
