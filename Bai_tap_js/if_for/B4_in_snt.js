


const prime = (n) => {
    if (n < 2) {  
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n%i==0) {
                return false;
            }
        }
        return true;
            
    }
}

const dem_SNT = (n)  => {
    for(let i = 2; i <= n; i++) {
        if(prime(i) == true) {
            console.log(i);
        }
    
    }
}
let n = 10;
dem_SNT(n);