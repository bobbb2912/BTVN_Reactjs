let n = 10;
for(let i = 2; i <= n; i++) {
    let flag = true;

    for(let j = 2; j <= i-1; j++) {
        if(i%j == 0 && i!=j) {
            flag = false;
            break;
        }
    }
    if (flag==true) {
        console.log(i);  
    }

}