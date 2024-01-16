let x;

const arr = [28 , 30 , 44 , 29 , 109];

//Them phan tu vao cuoi mang
arr.push(100);


//xoa phan tu cuoi cung trong mang
arr.pop();

//Them 1 phan tu vao dau mang
arr.unshift(10);

//xoa phan tu dau tien cua mang
arr.shift();

//Kiem tra 1 chuoi co chua chuoi hay khong
x = arr.includes(29);
console.log(x);

//Tra ve vi tri trong mang
x = arr.indexOf(109);
console.log(x);

//Trả về mảng dưới dạng chuỗi
x = arr.toString();
console.log(x);

//Noi cac phan tu cua mang voi nhau lai -> dang chuoi
x = arr.join();
console.log(x);

//slice() trả về các phần tử đã chọn trong một mảng dưới dạng một mảng mới. Slice lấy chỉ mục của phần tử đầu tiên và chỉ mục của phần tử cuối cùng được đưa vào mảng mới
x = arr.slice(1 , 4);
console.log(x);

// splice() hoạt động giống như slice() ngoại trừ việc nó lấy chỉ mục của phần tử đầu tiên và số phần tử sau đó làm đối số thứ hai. nó cũng làm thay đổi mảng ban đầu trong đó slice() không
x = arr.splice(1 , 4);
console.log(x);

// Xóa một phần tử/giá trị - Phần sau đây sẽ thay đổi mảng ban đầu bằng cách loại bỏ phần tử có chỉ số là 4. x sẽ bằng một mảng mới có giá trị được lấy ra đó.
x = arr.splice(4 , 1);
console.log(x);

// Phương thức xâu chuỗi - Một số phương thức có thể được xâu chuỗi tùy thuộc vào giá trị trả về.
x = arr.slice(1 , 4).reverse().toLocaleString().charAt(0);
console.log(x);