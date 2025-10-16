let x;

x = 5 + '5'; //55
x = 5 + +'5'; //10
x = 5 * '5'; //25
x = 5 + null;
x = Number(null)

x = Number(true) //1
x = Number(false) //0

x = 5 + true; // 6
x = 5 + false; //5

x = 5 + undefined; //NaN

console.log(x, typeof x);