// Yêu cầu người dùng nhập vào số nguyên dương n
const n = parseInt(prompt("Nhập vào số nguyên dương n: "));

// Tìm số nguyên dương m lớn nhất
let sum = 0;
let m = 0;

while (sum < n) {
  m++;
  sum += m;
}

// Giảm m đi 1 để đảm bảo tổng 1+2+3+...+m vẫn nhỏ hơn n
m--;

// In m ra màn hình console
console.log("Số nguyên dương m là:", m);