// Yêu cầu người dùng nhập vào số nguyên dương n
const n = parseInt(prompt("Nhập vào số nguyên dương n: "));

// Khởi tạo biến tổng
let sum = 0;

// Khởi tạo biến đếm và biến tạm
let count = 0;
let temp = 0;

// Tính giá trị biểu thức và cộng dồn vào biến tổng
for (let i = 1; i <= n; i++) {
  // Cập nhật giá trị tạm
  temp = temp * 10 + i;

  // Cộng dồn vào biến tổng
  sum += temp;
}

// In kết quả ra màn hình console
console.log("Giá trị của biểu thức S là:", sum);