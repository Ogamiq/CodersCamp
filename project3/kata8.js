const arr1 = [];
const arr2 = [[],[1]];
const arr3 = [[3, 2, 1], [7, 9, 8], [6, 4, 5]];

function flattenAndSort(array) {
    array = [].concat.apply([],array);
    return array.sort((a, b) => a - b);
}

console.log(flattenAndSort(arr2));