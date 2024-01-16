let x;
const fruits = ['apple' , 'pear' , 'orange'];
const berries = ['strawberry' , 'blueberry' , 'rasberry'];

fruits.push(...berries);
// console.log(fruits);

x = fruits[3][1];
// console.log(x);

//Tạo một biến mới và lồng cả hai mảng
const allFruits = [fruits , berries];
x = allFruits[1][2];
console.log(x);

//Phương thức concat() dùng để nối hai (hoặc nhiều) chuỗi lại với nhau thành một chuỗi.
x = fruits.concat(fruits);
console.log(x);

//Noi 2 mang lai voi nhau
x = [...fruits , ...berries];
console.log(x);

//flat() - Làm phẳng một mảng
const arr = [1 , 2 , [3 , 4 , 5] , 6 , [7 , 8]];
x = arr.flat();
console.log(x);

//Ktra xem co phai la mang hay khong
x = Array.isArray(fruits);
console.log(x);

x = Array.from('12345');
console.log(x);    // ['1' , '2' , '3' , '4' , '5']

const a = 1;
const b = 2;
const c = 3;

// of() - Tạo một mảng từ một tập hợp các giá trị
x = Array.of(a , b , c);
console.log(x);