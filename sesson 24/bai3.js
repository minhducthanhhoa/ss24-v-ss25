// Yêu cầu người dùng nhập vào hai số nguyên
const a = parseInt(prompt("Nhập vào số nguyên a: "));
const b = parseInt(prompt("Nhập vào số nguyên b: "));

// Tính kết quả của biểu thức ab
const result = Math.pow(a, b);

// In kết quả ra màn hình console
console.log("Kết quả của biểu thức", a, "^", b, "là", result);