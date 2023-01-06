

const tongBinhPhuong = () => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += Math.pow(i,2);
    }

    return sum;
}

let n = 3;
console.log(tongBinhPhuong(n));
