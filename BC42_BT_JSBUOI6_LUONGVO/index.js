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
let k = 1;
let Sum = 0;
for(let i = 1;i<=n;i++){
    Sum += Math.pow(x, k);
    k++
    console.log("Sum: ", Sum);
}
}