

const kiemTraDoiXung = (k) => {
    let str = k + '';
    let newString = '';
    console.log(str);
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    if (newString === str) {
      return true;
    } else {
      return false;
    }
}

let n = 12398321;
console.log(kiemTraDoiXung(n));