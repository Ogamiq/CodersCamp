const str1 = "abracadabra";
const vovels = ['a','e','i','o'];

const getCount = str => {
    let reducer = (acc, letter) =>
        {
            if(vovels.includes(letter)) return acc + 1;
            else return acc; 
        }
    return str.split('').reduce(reducer,0);
}

console.log(getCount(str1));