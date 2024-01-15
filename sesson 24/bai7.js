// Yêu cầu người dùng nhập vào một số
const number = parseInt(prompt("Nhập vào một số: "));

// Kiểm tra xem số nhập vào có phải là số nguyên tố hay không
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

// In kết quả ra màn hình console
if (isPrime) {
  console.log(number, "là số nguyên tố.");
} else {
  console.log(number, "không là số nguyên tố.");
}