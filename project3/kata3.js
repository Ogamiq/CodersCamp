//Printer Errors
const s1 = "aaabbbbhaijjjm"
const s2 = "aaaxbbbbyyhwawiwjjjwwm"

function printerError(s) {
    let badLetterNum = 0;
    for(let i = 0; i <= s.length; i++){
        if(s[i] > 'm') badLetterNum += 1;
    }
    return badLetterNum + '/' + s.length;
}

console.log(printerError(s1))