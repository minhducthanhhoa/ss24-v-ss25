// Yêu cầu người dùng nhập vào một số nguyên dương
const n = parseInt(prompt("Nhập vào một số nguyên dương n: "));

// Kiểm tra xem số nhập vào có hợp lệ hay không
if (n > 0) {
  let sum = 0;

  // Tính tổng biểu thức S
  for (let i = 1; i <= n; i++) {
    sum += 1 / Math.pow(i, 3);
  }

  // Làm tròn tổng đến 5 chữ số thập phân
  const roundedSum = sum.toFixed(5);

  // In kết quả ra màn hình console
  console.log("Kết quả của biểu thức S là:", roundedSum);
} else {
  console.log("Số nhập vào không hợp lệ!");
}