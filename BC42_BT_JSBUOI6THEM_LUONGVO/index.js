// Function 
// Bài tập 5
function checkNT(n){
    if(n<2){
        return false;
    }else{
        for(let i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}
checkNT();
console.log(checkNT(4));
document.getElementById("ket-qua3").onclick = function (){
    let nEl = parseInt(document.getElementById("input-n").value);
    for ( let i=2;i<nEl;i++){
        if(checkNT(i)){
            document.getElementById("ketqua3").innerHTML += `<span> ${i}
            </span>`
            document.getElementById("ketqua3").style.display = "block"
        }


    }
}
