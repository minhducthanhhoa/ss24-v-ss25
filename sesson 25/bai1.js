// Yêu cầu người dùng nhập vào một số nguyên dương
const n = parseInt(prompt("Nhập vào một số nguyên dương: "));

// Tính tổng các số nguyên dương từ 1 đến số vừa nhập
let sum = 0;
for (let i = 1; i <= n; i++) {
  console.log(i);
  sum += i;
}

// Kiểm tra và điều chỉnh tổng để đảm bảo là số lẻ
if (sum % 2 === 0) {
  sum += 1;
}

// In tổng lên màn hình console
console.log("Tổng các số là:", sum);