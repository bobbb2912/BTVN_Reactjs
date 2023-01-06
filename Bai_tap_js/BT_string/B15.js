let ten = '        nGuyen ThI HIEN';

ten = ten.trim();
ten = ten.toLowerCase();

for (let i = 0; i < ten.length; i++) {
    if(ten[i] == " ") {
        console.log(i);
        console.log(ten[i+1].toUpperCase());
        // ten= ten.replace(ten.charAt(i+1), ten.charAt(i+1).toUpperCase());
        ten[i+1] = ten.charAt(i+1).toUpperCase();
    }
}
console.log(ten);
