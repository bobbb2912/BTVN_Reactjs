

const inSo = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);  
    }
}

const soLe = (n) => {
    for (let i = 1; i <= n; i++) {
        if(i%2!=0) {
            console.log(i);  
        }
    }
}

const soChan = (n) => {
    for (let i = 1; i <= n; i++) {
        if(i%2==0) {
            console.log(i);  
        }
    }
}


let n = 10;
console.log("inso");
inSo(n);
console.log('so chan');
soChan(n);
console.log('so le');
soLe(n);