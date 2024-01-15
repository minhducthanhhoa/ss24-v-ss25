// Yêu cầu người dùng nhập vào một số nguyên dương
const n = parseInt(prompt("Nhập vào một số nguyên dương n: "));

// Kiểm tra xem số nhập vào có hợp lệ hay không
if (n > 0) {
  // Chuyển đổi số thành chuỗi và sử dụng phương thức reverse() để đảo ngược chuỗi
  const reversedString = n.toString().split('').reverse().join('');

  // Chuyển đổi chuỗi đảo ngược thành số
  const reversedNumber = parseInt(reversedString);

  // In số đảo ngược lên màn hình console
  console.log("Số đảo ngược của", n, "là", reversedNumber);
} else {
  console.log("Số nhập vào không hợp lệ!");
}