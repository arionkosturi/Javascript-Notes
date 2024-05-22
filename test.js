// Të shkruhet programi që simulon funksionalitetin e metodës map()
//function _map(arr, f) { 
    // kodi juaj 
// }


const arr = [4, 5, 10, 3, 8, 6];
let result = [];

const dyfisho = function() {
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result
}

console.log(dyfisho(arr));
