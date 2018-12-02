// Ceaser's Cipher: Letter shifted to certain number x
// ex 'LBH QVQ VG!'

// Basic

function shift13(str) {
    return str.split('')
    .map.call(str, function(char) {
        x = char.charCodeAt(0);

        if (x < 65 || x > 90) {
            return String.fromCharCode(x);
        } else if (x < 78) {
            return String.fromCharCode(x + 13);
        } 
        
        return String.fromCharCode(x - 13);
    }).join('');
}

// Intermediate

function shift13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");

    for (var x in str) {
        if (regEx.test(str[x])) {
            rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
            rotCharArray.push(str[x].charCodeAt());
        }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
}


// Advanced

function shift13(str) {
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}
