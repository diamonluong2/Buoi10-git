// Mô hình 3 khối 
// Bài tập tự luyện 1 
let ab = document.getElementById("A-B");
let ac = document.getElementById("A-C");
let tinhBC = document.getElementById("tinh-BC");
tinhBC.onclick = function(){
    let bc = Math.sqrt(parseInt(ab.value) ** 2 + parseInt(ac.value) ** 2);
    let hBC = "<h3>" + "Kết quả cạnh BC là: " + bc + "</h3>";
    let tBC = document.getElementById("B-C");
    tBC.innerHTML = hBC;
}


// Bài tập tự luyện 2
let so3So = document.getElementById("so3chu");
let total = 0;
let tinh3So = document.getElementById("tinh-3so");
tinh3So.onclick = function(){
    let n = parseInt(so3So.value);
    total = n % 10;
    n = Math.floor(n/10);
    total += n % 10;
    console.log(total);
    n = Math.floor(n/10);
    total += n % 10;
    console.log(total);
    let h3so = "<h3>" + "Kết quả tổng 3 số là: " + total + "</h3>";
    let t3so = document.getElementById("tinh3so");
    t3so.innerHTML = h3so;
}

// Bài tập tự luyện 3 
let tenPhim = document.getElementById("ten-phim");
let giaVeNguoiLon = document.getElementById("ve-nglon");
let giaVeTreEm = document.getElementById("ve-treem");
let soVeNguoiLon = document.getElementById("so-nglon");
let soVeTreEm = document.getElementById("so-treem");
let phanTram = document.getElementById("tu-thien");
let tinhVe = document.getElementById("tinh-ve");
tinhVe.onclick = function(){
    giaVeL = parseInt(giaVeNguoiLon.value);
    giaVeT = parseInt(giaVeTreEm.value);
    soVeL = parseInt(soVeNguoiLon.value);
    soVeT = parseInt(soVeTreEm.value);
    soPT = parseInt(phanTram.value)/100;

    let tongVeBan = soVeL + soVeT;
    let tongDoanhThu = giaVeL*soVeL + giaVeT*soVeT;
    let tienTuThien = tongDoanhThu * soPT;
    let tienConLai = tongDoanhThu - tienTuThien;

    let hTenPhim = "<h3>" + "Tên phim:.............................. " + tenPhim.value + "</h3>";
    let hSoVe =  "<h3>" + "Số vé đã bán:.......................... " + tongVeBan + "</h3>";
    let hDoanhThu =  "<h3>" + "Doanh thu:............................. " + tongDoanhThu + "</h3>";
    let hTuthien =  "<h3>" + "Tổng tiền trích từ thiện:.............. " + tienTuThien + "</h3>";
    let hConlai =  "<h3>" + "Tổng doanh thu sau khi trừ:............ " + tienConLai + "</h3>";
    let tVeXem = document.getElementById("tinhvexem");
    tVeXem.innerHTML = hTenPhim + "<br>" + hSoVe + "<br>" + hDoanhThu + "<br>" + hTuthien + "<br>" + hConlai;
}

// Bài tập nộp
// Bài tập 1 
let salary1Day = 100000
let tinhtienEl = document.getElementById("tinhtien");
let tinhtoanEl = document.getElementById("tinhtoan");

tinhtoanEl.onclick = function() {
    // Những câu lệnh bên trong cặp {} sẽ được chạy khi user click vào button 
    let ketQua = salary1Day * tinhtienEl.value;
    let tdQua = "<p>" + "Kết quả hiện ra là: " + ketQua + "</p>"
    let tdiv = document.getElementById("ket-qua");
    tdiv.innerHTML = tdQua;
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
    let pReSult = "<h3>" + "Kết quả hiện ra là: " + reSult + "</h3>"
    let divTB = document.getElementById("tinh-TB");
    divTB.innerHTML = pReSult;
}

// Bài tập 3
let so1USD = 23500;
let doitienEl = document.getElementById("doitien");

let quyDoiEl = document.getElementById("quydoi");
quyDoiEl.onclick = function(){
    let exChange = doitienEl.value * so1USD;
    let hExChange = "<h3>" + "Kết quả hiện ra là: " + exChange + "</h3>";
    let divQD = document.getElementById("tinh-QD");
    divQD.innerHTML = hExChange;
}

// Bài tập 4 
let chieudaiEl = document.getElementById("chieudai");
let chieurongEl = document.getElementById("chieurong");
let tinhCVEl = document.getElementById("tinhCV");
tinhCVEl.onclick = function(){
    let tinhChuvi = (parseInt(chieudaiEl.value) + parseInt(chieurongEl.value))*2;
    let tinhDientich = parseInt(chieudaiEl.value) * parseInt(chieurongEl.value);
    let hCV = "<h3>" + "Chu vi là: " + tinhChuvi + "</h3>";
    let hDT = "<h3>" + "Diện tích là: " + tinhDientich + "</h3>";
    let divCV = document.getElementById("tinh-CV");
    divCV.innerHTML = hCV + "<br>" + hDT;
}

// Bài tập 5 
let numberEl = document.getElementById("number");
let countnumerEl = document.getElementById("countnumber");
countnumerEl.onclick = function(){
    let number1El = parseInt(numberEl.value) % 10;
    let numberaEl = parseInt(numberEl.value) - number1El;
    let number2El = numberaEl / 10;
    let countSum = number1El + number2El;

    let hCountSum = "<h3>" + "Kết quả hiện ra là: " + countSum + "</h3>";
    let divCN = document.getElementById("count-number");
    divCN.innerHTML = hCountSum;

}