// Yêu cầu người dùng nhập vào số nguyên dương n
const n = parseInt(prompt("Nhập vào số nguyên dương n: "));

// Hàm tính số Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let fibPrev = 0;
  let fibCurr = 1;

  for (let i = 2; i <= n; i++) {
    const fibNext = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = fibNext;
  }

  return fibCurr;
}

// Tính và in số Fibonacci thứ n
const fibN = fibonacci(n);
console.log(`Số Fibonacci thứ ${n} là:`, fibN);