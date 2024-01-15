// Yêu cầu người dùng nhập vào một số nguyên dương
const number = parseInt(prompt("Nhập vào một số nguyên dương: "));

// Kiểm tra xem số nhập vào có hợp lệ hay không
if (number > 0) {
  console.log("Bình phương các số nguyên dương chẵn từ 1 sao cho tổng nhỏ hơn", number);

  let sum = 0;
  let evenNumber = 2;

  // In ra bình phương các số nguyên dương chẵn từ 1, đến khi tổng nhỏ hơn số nhập vào
  while (sum + Math.pow(evenNumber, 2) < number) {
    const square = Math.pow(evenNumber, 2);
    console.log(square);
    sum += square;
    evenNumber += 2;
  }
} else {
  console.log("Số nhập vào không hợp lệ!");
}