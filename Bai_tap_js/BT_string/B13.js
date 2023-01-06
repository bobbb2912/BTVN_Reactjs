let str = 'This is a beautiful day';

let rev_str = '';
for(let i = str.length-1; i >= 0; i--) {
    rev_str += str[i];
}
console.log(rev_str);