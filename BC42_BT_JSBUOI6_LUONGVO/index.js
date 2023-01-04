// Function 
// Bài tâp 1 
document.getElementById("ket-qua1").onclick = function (){
    let sum = 0;
    let minSum;
    for(let i=1;sum<=10000;i++){
            sum += i;
            console.log("Sum: ",sum);
            if(sum>10000){
                minSum = i;
                console.log("minSUm:",minSum);
            }
    }
    document.getElementById("ketqua1").innerHTML = `<span> Số nguyên dương nhỏ nhất: ${minSum}
    </span>`
    document.getElementById("ketqua1").style.display = "block"

}

// Bài tập 2
document.getElementById("ket-qua2").onclick = function (){
let x = parseInt(document.getElementById("input-X").value);
let n = parseInt(document.getElementById("input-N").value);
let Sum = 0;
for(let i = 1;i<=n;i++){
    Sum += Math.pow(x, i);
}
document.getElementById("ketqua2").innerHTML = `<span> Tổng: ${Sum}
</span>`
document.getElementById("ketqua2").style.display = "block"
}

// Bài tập 3
document.getElementById("ket-qua3").onclick = function (){
    let n = parseInt(document.getElementById("input-n").value);
    let Sum = 1;
    for(let i = 1;i<=n;i++){
        Sum = Sum*i;
    }
    document.getElementById("ketqua3").innerHTML = `<span> Kết quả là: ${Sum}
    </span>`
    document.getElementById("ketqua3").style.display = "block"
}

// Bài tập 4
document.getElementById("ket-qua4").onclick = function (){
    // let Sum = 1;
    for(let i = 1;i<=10;i++){
        if(i%2 === 0){
            document.getElementById("ketqua4").innerHTML += `<div style="background-color:blue;padding: 10px"> Div lẻ ${i} </div>`
            document.getElementById("ketqua4").style.display="block";
        }else{
            document.getElementById("ketqua4").innerHTML += `<div style="background-color:red;padding: 10px"> Div chẵn ${i} </div>`
            document.getElementById("ketqua4").style.display="block";
        }

    }
}