//Ones and Zeros
const arr1 = [1,1,0,1]; //13
const arr2 = [1,0,0,0]; //8
const arr3 = [0,1,1,1]; //7

const binaryArrayToNumber = arr => {
    let reversedArr = arr.reverse();
    let result = 0;
    for(let i = 0; i < reversedArr.length; i++) {
        result += reversedArr[i] * Math.pow(2,i)
    }
    return result;
};


console.log(binaryArrayToNumber(arr1));
console.log(binaryArrayToNumber(arr2));
console.log(binaryArrayToNumber(arr3));