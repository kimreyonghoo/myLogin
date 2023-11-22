const $pwcheck=document.querySelector(".pw-check");
const $pw=document.querySelector(".pw");
const $idpwField=document.querySelector(".idpwField");
const wrongMessage=document.createElement("p");
const $major=document.querySelector(".major");
const $phonenum=document.querySelector(".phone-number");
$idpwField.appendChild(wrongMessage);
wrongMessage.textContent=`Not Matched!`;
wrongMessage.style.color="red";

const $studentNum=document.querySelector(".student-number");
function numToMajor(){
    let num=$studentNum.value;
    num = num.slice(4, -3);
    console.log(num);
    if(num==="136") {
        $major.value=`컴퓨터공학부`;
    }
}
function phnumChange(){
    let num=$phonenum.value;
    num=num.replace(/(\d{3})(\d{4})(\d{4})/,`$1-$2-$3`);
    $phonenum.value=num;
}
function pwConfirm(){
    if($pwcheck.value===$pw.value){
        wrongMessage.textContent=`Matched!`;
        wrongMessage.style.color="green";
    }
}

$pwcheck.addEventListener("change",pwConfirm);
$studentNum.addEventListener("change",numToMajor);
$phonenum.addEventListener("change",phnumChange);
