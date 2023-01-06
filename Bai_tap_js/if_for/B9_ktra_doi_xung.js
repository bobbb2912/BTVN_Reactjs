let n = 12423423;

let test = n;
let count = 0;
while (test > 0) {
    test = parseInt(test/10);
    count++;
}
console.log(count);
let flag = true;

for(let i = 1; i < count/2; i++) {
    if(n%Math.pow(10, (count-i)) != n%Math.pow(10, i)) {
        flag = false;
        break;
    }
}

if(flag==true) {
    console.log("YES");
} else {
    console.log("NO");
}

// let k = 1239321;
// let str = k + '';
// let newString = '';
// console.log(str);
// for (let i = str.length - 1; i >= 0; i--) {
//   newString += str[i];
// }
// if (newString === str) {
//   console.log('là số đối xứng');
// } else {
//   console.log('không phải số đối xứng');
// }