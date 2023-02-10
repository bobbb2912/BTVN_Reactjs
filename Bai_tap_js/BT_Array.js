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
    let  a = [1,2,3,4,6,7];
    let k = 5;
    let b = [];
    let flag;

    for (let i = 0; i < a.length; i++) {

        if(i == 0) {
            flag = Math.abs(a[i]-k);
            b.push(a[i]);
        } else {
            if(Math.abs(a[i]-k) == flag) {
                b.push(a[i]);
            } else if(Math.abs(a[i]-k) < flag) {
                flag = Math.abs(a[i]-k);
                b = [];
                b.push(a[i]);
            }
        }
        
    }
    console.log(b);
}

const Bai27 = () => {
    students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ];

   
    for (const element of students) {
        let ten = element.firstName.trim().toLowerCase();
        let ho = element.lastName.trim().toLowerCase();
        ten = ten[0].toUpperCase() + ten.slice(1);
        for(let j = 0; j < ho.length; j++) {
            if(ho[j-1] === ' ' ||j == 0) {
                ho = ho.slice(0, j) 
                + ho.charAt(j).toUpperCase() 
                + ho.slice(j+1);
            }
        }
        element.firstName = ten;
        element.lastName = ho;

        // if(element.firstName.length >= 3 && (element.firstName.indexOf('a')!=-1 || element.firstName.indexOf('A')!=-1)) {
        //     console.log(element);
        // } 
    }
    const listStudentFilter = students.filter((item, index) => {
        return (item.firstName.length >=3) && (item.firstName.indexOf('a')!=-1 || item.firstName.indexOf('A')!=-1);
    });
    console.log(listStudentFilter);
}
const Bai28 = () => {
    students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ];

   
    for (const element of students) {
        let ten = element.firstName.trim().toLowerCase();
        let ho = element.lastName.trim().toLowerCase();
        ten = ten[0].toUpperCase() + ten.slice(1);
        for(let j = 0; j < ho.length; j++) {
            if(ho[j-1] === ' ' ||j == 0) {
                ho = ho.slice(0, j) 
                + ho.charAt(j).toUpperCase() 
                + ho.slice(j+1);
            }
        }
        element.firstName = ten;
        element.lastName = ho;

        // if(element.lastName.indexOf('Do ')!=-1) {
        //     console.log(element);
        // } 
    }
    const listStudentFilter = students.filter((item, index) => {
        return (item.lastName.indexOf('Do ') != -1);
    });
    console.log(listStudentFilter);
}
const Bai29 = () => {
    students = [
        {
            id: "T3HXX1",
            firstName: "NgAN",
            lastName: "Duong Thuy"
        },
        {
            id: "T3HXX2",
            firstName: "Ha",
            lastName: "Do Thi Thu"
        },
        {
            id: "T3HXX5",
            firstName: "Minh",
            lastName: "Nguyen Nhat"
        }
    ];

   
    for (const element of students) {
        let ten = element.firstName.trim().toLowerCase();
        let ho = element.lastName.trim().toLowerCase();
        ten = ten[0].toUpperCase() + ten.slice(1);
        for(let j = 0; j < ho.length; j++) {
            if(ho[j-1] === ' ' ||j == 0) {
                ho = ho.slice(0, j) 
                + ho.charAt(j).toUpperCase() 
                + ho.slice(j+1);
            }
        }
        element.firstName = ten;
        element.lastName = ho; 
    }
    students.sort((a, b) => {
        let fa = a.firstName.toLowerCase(), 
            fb = b.firstName.toLowerCase();
        if(fa < fb) {
            return -1;
        }
        if(fa > fb) {
            return 1;
        }
        return 0;
    });
    console.log(students);
}

const Bai30 = () => {
    let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
    // let a = [1,1,1,1,1,1,1,1,1,1];
    a.sort();
    a.reverse();
    // console.log(a);
    let max = a[0];
    let flag = -1;
    for(const element of a) {
        if(element<max) {
            console.log(element);
            flag = 0;
            break;
        }
    }
    if(flag!=0) {
        console.log(flag);
    }

}

const Bai31 = () => {
    let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1],
    k = 30;
    a.sort();
    let flag = 'NO';
    for (let i = 0; i < a.length-2; i++) {
        for (let j = 0; j < a.length-1; j++) {
            for (let m = 0; m < a.length; m++) {
                if(a[i] + a[j] + a[m] == k) {
                    flag = 'YES';
                    console.log(a[i] + ' + ' + a[j] + ' + ' + a[m] + ' = ' + k);
                    break;
                }
            }
            if(flag==='YES') break;
        }
        if(flag==='YES') break;
    }

    console.log(flag);
    
}

const Bai32 = () => {
    let a = [1,3,6,9,11,20];
    let k = 10;
    for (let i = 0; i < a.length; i++) {
        if(i===a.length-1 && a[i] < k) {
            a.push(k); break;
        }else if(i == 0 && a[i] > k) {
            a.unshift(k); break;
        }
         else if(a[i] < k && a[i+1] >= k) {
            a.splice(i+1, 0, k);
            break;
        }
        
    }
    console.log(a);
}

const Bai33 = () => {
    let a = [9,8,7,6,4,5,3,2,1]; 

    for (let i = 0; i < a.length-1; i++) {
        for (let j = i; j < a.length; j++) {
            if(a[i] > a[j]) {
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
        console.log(a);
    }
    console.log(a);
}


// https://docs.google.com/document/d/1dOKBt0epsxVNdcXwuHWlZrerUVuudlpXFFUrp2FxsXY/edit

// Bai21();
// Bai22();
// Bai23();
// Bai24();
// Bai25();
// Bai26();
Bai27();
// Bai28();
// Bai29();
// Bai30();
// Bai31();
// Bai32();
// Bai33();