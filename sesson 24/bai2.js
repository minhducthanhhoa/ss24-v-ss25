// Yêu cầu người dùng nhập vào hai số nguyên
const a = parseInt(prompt("Nhập vào số nguyên a: "));
const b = parseInt(prompt("Nhập vào số nguyên b: "));

// Tính tổng các số nguyên trong khoảng giữa a và b
let sum = 0;

// Xác định số nhỏ nhất và số lớn nhất trong hai số a và b
const min = Math.min(a, b);
const max = Math.max(a, b);

// Tính tổng các số nguyên trong khoảng giữa min và max
for (let i = min + 1; i < max; i++) {
  sum += i;
}

// In kết quả tổng ra màn hình console
console.log("Tổng các số nguyên trong khoảng giữa", a, "và", b, "là", sum);