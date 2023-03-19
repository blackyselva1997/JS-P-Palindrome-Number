// 4. Design a method to return how many palindrome are there in the array.

let a = [1001,3523,235,65456,987,12321,2345432];
let result = 0;
let total = 0;
for (i=0;i<a.length;i++) {
    let c = a[i];
    while(a[i] > 0){
        let b = a[i] % 10;
        a[i] = (a[i] - b) / 10;
        result = (result*10) + b;
    }
    if (result == c) {
        total++;
    }
    result = 0;
}
document.write(total);