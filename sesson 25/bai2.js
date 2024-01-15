// Yêu cầu người dùng nhập vào hai số nguyên dương
const a = parseInt(prompt("Nhập vào số nguyên dương a: "));
const b = parseInt(prompt("Nhập vào số nguyên dương b: "));

// Xác định giá trị nhỏ nhất và lớn nhất giữa a và b
const min = Math.min(a, b);
const max = Math.max(a, b);

// Tính tổng các số lẻ và chẵn nằm giữa a và b
let sumEven = 0;
let sumOdd = 0;

for (let number = min + 1; number < max; number++) {
  if (number % 2 === 0) {
    sumEven += number;
  } else {
    sumOdd += number;
  }
}

// In kết quả ra màn hình console
console.log("Tổng các số chẵn là:", sumEven);
console.log("Tổng các số lẻ là:", sumOdd);