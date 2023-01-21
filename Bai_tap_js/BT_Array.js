// https://docs.google.com/document/d/1dOKBt0epsxVNdcXwuHWlZrerUVuudlpXFFUrp2FxsXY/edit

const Bai21 = () => {
    let sum = 0;
    let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
    a.forEach(i => {
        sum+=i;
    });
    console.log(sum);
}

const Bai22 = () => {
    let max, min;
    let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
    max = min = a[0];
    for (let i = 1; i < a.length; i++) {
        if(a[i] > max) {
            max = a[i];
        }
        if(a[i] < min) {
            min = a[i];
        }
        
    }
    console.log('max = ' + max + ', min = ' + min);
}

const Bai23 = () => {
    let a = [1,2,3,4,5,6,7,8,9,3,1,9,9,9,8,7,6,5,4,3,2,1];
    a.sort();
    let count = 0;
    let max = 0;
    let flag ;
    for (let i = 1; i < a.length; i++) {
        if(a[i] == a[i-1]) {
            count++;
            if(count > max) {
                max = count;
                flag = a[i-1];
            }
        } else {
            count = 1;
        }
        
    }
    console.log('max = ' + max + ', a = ' + flag);
}

const Bai24 = () => {
    let a = [1,2,3,2,3,4,6,7, 9, 11];
    let b = [];
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
    for (let i = 0; i < a.length; i++) {
        if(prime(a[i])) {
            b.push(a[i]);
        }
    }

    console.log(b);
}

const Bai25 = () => {
    let a = [1,2,3,2,3,4,6,7];
    let b = [];

    for (let i = 0; i < a.length; i++) {
        b.push(Math.pow(a[i],2));
        
    }

    console.log(b);
}

const Bai26 = () => {

}

// Bai21();
// Bai22();
Bai23();
// Bai24();
// Bai25();