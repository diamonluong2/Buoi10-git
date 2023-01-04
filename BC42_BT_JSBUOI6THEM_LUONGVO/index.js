// Function 
// Bài tập 5
document.getElementById("ket-qua3").onclick = function (){
    let n = parseInt(document.getElementById("input-n").value);
    for(let i = 1;i<=n;i++){
        if(i%2===0&&i%(Math.sqrt(i))!==0){
            document.getElementById("ketqua3").innerHTML += `<span> ${i}
            </span>`
            document.getElementById("ketqua3").style.display = "block"
        }
    }
}
