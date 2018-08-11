const str1 = 'holly';
const str2 = 'abc';

function insertMissingLetters(str) {
    newString = '';
    for(let i = 0; i < str.length; i++){
        let alphabetFromLetter = new Set(range(str[i].charCodeAt(0) + 1, 122));
        let stringASCI = new toASCIList(str1);
        let diff = difference(alphabetFromLetter, stringASCI);
        let lettersToInsert = stringFromASCIList(Array.from(diff)).toUpperCase();
        newString += (str[i] + lettersToInsert);
    }
    return newString;
}

function toASCIList(str) {
    let ASCIList = [];
    for (let i = 0; i < str.length; i++) {
        ASCIList[i] = str[i].charCodeAt(0);
    }
    return ASCIList;
}

function stringFromASCIList(ASCIList) {
    let charList = [];
    for (let i = 0; i < ASCIList.length; i++) {
        charList.push(String.fromCharCode(ASCIList[i]))
    }
    return charList.join('');
}

function range(start, end) {
    let result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result;
}

function difference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}


console.log(insertMissingLetters(str1));



