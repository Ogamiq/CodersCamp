//Format a string of names like 'Bart, Lisa & Maggie'.
const names1 = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];
const names2 = [{ name: 'Bart' }, { name: 'Lisa' }];
const names3 = [{ name: 'Bart' }];

function list(names) {
    let plainNames = names.map(names => names.name);
    let length = plainNames.length;

    if(length >= 2)
    {
        let comaNames = plainNames.slice(0, length - 1).join(', ');
        return comaNames + ' & ' + plainNames[length - 1];
    }
    else if (length === 1) return plainNames[0];
    else return '';
}

console.log(list(names3));