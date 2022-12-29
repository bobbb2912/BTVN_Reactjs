let n = 10;
// in so tu 1 den n
console.log("///////////in////////////");
for (let i = 1; i <= n; i++) {
    console.log(i);  
}

// so le tu 1 den n
console.log("///////////so le////////////");

for (let i = 1; i <= n; i++) {
    if(i%2!=0) {
        console.log(i);  
    }
}
// so chan tu 1 den n
console.log("///////////so chan////////////");
for (let i = 1; i <= n; i++) {
    if(i%2==0) {
        console.log(i);  
    }
}