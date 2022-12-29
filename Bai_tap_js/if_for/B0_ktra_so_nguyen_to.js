let n = 9;

if (n < 2) {  
    console.log("NO");
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i==0) {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
        
}