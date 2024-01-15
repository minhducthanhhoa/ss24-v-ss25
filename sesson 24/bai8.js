// Yêu cầu người dùng nhập vào một số nguyên dương
const n = parseInt(prompt("Nhập vào một số nguyên dương n: "));

// Hàm kiểm tra xem một số có phải là số nguyên tố hay không
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// In n số nguyên tố đầu tiên
let count = 0;
let currentNumber = 2;

while (count < n) {
  if (isPrime(currentNumber)) {
    console.log(currentNumber);
    count++;
  }
  currentNumber++;
}