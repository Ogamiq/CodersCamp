//Multiples of 3 or 5
const num1 = 10;
const num2 = 20;

function solution(number) {
    const multiplesOf3 = multiplesOfNum(number,3);
    const multiplesOf5 = multiplesOfNum(number,5);
    const multiplesOf3And5 = Array.from(new Set(multiplesOf3.concat(multiplesOf5)));
    return multiplesOf3And5.reduce((a,b) => a + b, 0)
}

function multiplesOfNum(number, multipleNumber) {
    let multiples = []
    for(let i=1; i<number; i++) {
        if(i % multipleNumber === 0){
            multiples.push(i);
        }
    }
    return multiples;
}

console.log(solution(10));