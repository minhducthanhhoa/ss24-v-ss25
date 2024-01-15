// Yêu cầu người dùng nhập vào một số nguyên dương
const number = parseInt(prompt("Nhập vào một số nguyên dương: "));

// Kiểm tra xem số nhập vào có hợp lệ hay không
if (number > 0) {
  console.log("Bình phương các số nguyên dương chẵn từ 1 đến", number);

  // In ra bình phương các số nguyên dương chẵn từ 1 đến số nguyên nhập vào
  for (let i = 2; i <= number; i += 2) {
    console.log(i ** 2);
  }
} else {
  console.log("Số nhập vào không hợp lệ!");
}