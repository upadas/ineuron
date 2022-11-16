
countRepeatingChars('seven eight nine ten');

function countRepeatingChars(str){
    // e) Count the repeating characters.
    var obj={};
    for(i = 0, length = str.length; i < length; i++) {
        var c = str.charAt(i)
        obj[c] = (isNaN(obj[c]) ? 1 : obj[c] + 1);
    }

    // for (var key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         if (obj[key] === 1) {
    //             delete obj[key];
    //         }
    //     }
    // }

    for (const key of Object.keys(obj)) {
        if (obj[key] === 1) {
            delete obj[key];
        }
    }
    console.log ("10. e) Count of repeating characters in a string " + JSON.stringify(obj));
}

