let n = 1242343;

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