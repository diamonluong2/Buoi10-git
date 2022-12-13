// Mô hình 3 khối 
// Bài tập tự luyện 1 
let ab = 3;
let ac = 4;

let bc = Math.sqrt(ab ** 2 + ac ** 2)
console.log("cạnh huyền bc là: ", bc);

// Bài tập tự luyện 2 
let n = 361;
let total = 0;

total = n % 10;
console.log("total là: ", total);
n = Math.floor(n/10);
total += n % 10;
console.log("total là: ", total);
n = Math.floor(n/10);
total += n % 10;
console.log("total là: ", total);

// Bài tập tự luyện 3 
let tenPhim = "Avatar";
let giaVeNguoiLon = 100000;
let giaVeTreEm = 50000;
let soVeNguoiLon = 5;
let soVeTreEm = 10;
let phanTram = 0.2;

let tongVeBan = soVeNguoiLon + soVeTreEm;
let tongDoanhThu = giaVeNguoiLon*soVeNguoiLon + giaVeTreEm*soVeTreEm;
let tienTuThien = tongDoanhThu * phanTram;
let tienConLai = tongDoanhThu - tienTuThien;

console.log("Tên phim:.............................. ", tenPhim);
console.log("Số vé đã bán:.......................... ", tongVeBan);
console.log("Doanh thu:............................. ", tongDoanhThu);
console.log("Trích % từ thiện:...................... ", phanTram);
console.log("Tổng tiền trích từ thiện:.............. ", tienTuThien);
console.log("Tổng doanh thu sau khi trừ:............ ", tienConLai);
// Bài tập nộp
// Bài tập 1 
let salary1Day = 100000
let tinhtienEl = document.getElementById("tinhtien");

let tinhtoanEl = document.getElementById("tinhtoan");
tinhtoanEl.onclick = function() {
    // Những câu lệnh bên trong cặp {} sẽ được chạy khi user click vào button 
    let ketQua = salary1Day * tinhtienEl.value;
    console.log("kết quả là: ", ketQua);
    alert("Kết quả là: " + ketQua);
}

// Bài tập 2
let tinhTien1 = document.getElementById("tinhtien1");
let tinhTien2 = document.getElementById("tinhtien2");
let tinhTien3 = document.getElementById("tinhtien3");
let tinhTien4 = document.getElementById("tinhtien4");
let tinhTien5 = document.getElementById("tinhtien5");

let tinhTrungBinh = document.getElementById("tinhTB");
tinhTrungBinh.onclick = function(){
    let reSult = (parseInt(tinhTien1.value) + parseInt(tinhTien2.value) + parseInt(tinhTien3.value) + parseInt(tinhTien4.value) + parseInt(tinhTien5.value))/5;
    console.log("Kết quả là: ", reSult);
    alert("Kết quả là: " + reSult);
}

// Bài tập 3
let so1USD = 23500;
let doitienEl = document.getElementById("doitien");

let quyDoiEl = document.getElementById("quydoi");
quyDoiEl.onclick = function(){
    let exChange = doitienEl.value * so1USD;
    console.log("Kết quả là: ", exChange);
    alert("Kết quả là: " + exChange);
}

// Bài tập 4 
let chieudaiEl = document.getElementById("chieudai");
let chieurongEl = document.getElementById("chieurong");
let tinhCVEl = document.getElementById("tinhCV");
tinhCVEl.onclick = function(){
    let tinhChuvi = (parseInt(chieudaiEl.value) + parseInt(chieurongEl.value))*2;
    let tinhDientich = parseInt(chieudaiEl.value) * parseInt(chieurongEl.value);
    console.log("Chu vi, diện tích là: ", tinhChuvi, tinhDientich);
    alert("Chu vi, diện tích là: " + tinhChuvi + " " + tinhDientich);
}

// Bài tập 5 
let numberEl = document.getElementById("number");


let countnumerEl = document.getElementById("countnumber");
countnumerEl.onclick = function(){
    let number1El = parseInt(numberEl.value) % 10;
    let numberaEl = parseInt(numberEl.value) - number1El;
    let number2El = numberaEl / 10;
    let countSum = number1El + number2El;
    console.log("Tổng là: ", countSum);
    alert("Tính tổng là: " + countSum);
}