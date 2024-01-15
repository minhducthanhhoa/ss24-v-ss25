// Yêu cầu người dùng nhập vào số nguyên n
const n = parseInt(prompt("Nhập vào số nguyên n: "));

// Khởi tạo biến đếm
let count = 0;

// Chuyển đổi n thành chuỗi
const nStr = Math.abs(n).toString();

// Đếm số chữ số chẵn
for (let i = 0; i < nStr.length; i++) {
  const digit = parseInt(nStr[i]);
  if (digit % 2 === 0) {
    count++;
  }
}

// In kết quả ra màn hình console
console.log("Số chữ số chẵn trong n là:", count);