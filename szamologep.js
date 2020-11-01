const STATUS_FIRSTNUM = "firstnum"
const STATUS_SECONDNUM = "secondnum"
const STATUS_OPERAND = "operand"
const STATUS_DONE = "done"

//változók
let firstNumber = "";
let operand = "";
let secondNum = "";
let status = STATUS_FIRSTNUM;

let buttonAdd = document.getElementById("plusz")
let buttonMinus = document.getElementById("minus")
let buttonTimes = document.getElementById("szorzas")
let buttonDivide = document.getElementById("osztas")
let buttonEquals = document.getElementById("egyenlo")
let buttonnégyzet = document.getElementById("negyzet")
// let buttongyök = document.getElementById("gyok")
// let buttontorles = document.getElementById("torles")
// let buttonEgyeseveltorles = document.getElementById("egyesevelTorles")

buttonAdd.addEventListener("click", OnOperandClick)
buttonMinus.addEventListener("click", OnOperandClick)
buttonTimes.addEventListener("click", OnOperandClick)
buttonDivide.addEventListener("click", OnOperandClick)
buttonEquals.addEventListener("click", OnOperandClick)
buttonnégyzet.addEventListener("click", OnOperandClick)
// buttongyök.addEventListener("click", OnOperandClick)
// buttontorles.addEventListener("click", OnOperandClick)
// buttonEgyeseveltorles.addEventListener("click", OnOperandClick)




// Teljes törlés
$("#torles").click(function () {
    Number1("");
    Number2("");
    Operand("");
    // azért írom ki az összest hátha a egyenlöség előtt gondolná meg magát az illető
    $("#displayNumber1").html("");
    $("#displayNumber2").html("");
    $("#displayOperantus").html("");
})


//Eseménykezelő függgvények
function OnOperandClick() {
    let currentElement = this;
    let currentOperand = currentElement.innerText;

    switch (status) {
        case STATUS_DONE:
            if (currentOperand == '=') {
                break;
            }
            status = STATUS_OPERAND;
            Operand(currentOperand);
            break;
        case STATUS_FIRSTNUM:
            if (currentOperand == "x2") {
                let answer = Math.pow(Number(firstNumber), 2);
                Number1(answer);
                break;
            }
        case STATUS_FIRSTNUM:
            if (currentOperand == '=') {
                break;
            }
            status = STATUS_OPERAND;
            Operand(currentOperand);
            break;
        case STATUS_OPERAND:
            if (currentOperand == '=') {
                break;
            }
            Operand(currentOperand);
            break;

        case STATUS_SECONDNUM:
            //kiszámol
            let answer = Math.round(eval(Number(firstNumber) + operand + Number(secondNum)) * 1000) / 1000;
            // berakni az első helyre
            Number1(answer)
            // második szám üritése
            Number2("");
            if (currentOperand == "=") {
                status = STATUS_DONE;
                Operand("")
            } else {
                Operand(currentOperand);
                status = STATUS_OPERAND;
            }

        case STATUS_SECONDNUM:
            if (currentOperand == "x2") {
                let answer = Math.pow(Number(firstNumber),2);
                Number1(answer);
                break;
            }

        default:
            break;
    }

    console.log(currentOperand);
}

$(".Szam").click(function () {
    let szam = $(this).text();
    switch (status) {
        case STATUS_FIRSTNUM:
            firstNumber += szam;
            Number1(firstNumber)
            break;

        case STATUS_OPERAND:
            status = STATUS_SECONDNUM;

        case STATUS_SECONDNUM:
            secondNum += szam;
            Number2(secondNum)
            break;
        case STATUS_DONE:
            Number1(szam)
            status = STATUS_FIRSTNUM;
            break;
    }
    console.log(status, szam,operand);
})


function Number1(val) {
    firstNumber = val;
    $("#displayNumber1").html(val);
}

function Number2(val) {
    secondNum = val;
    $("#displayNumber2").html(val);
}

function Operand(val) {
    operand = val;
    $("#displayOperantus").html(val);

}































// $("button").click(function(){
//     let gomb = $(this).text();
//     console.log("innen tovább nem megy!!!")
//     if(firstNumber == null){
//         // console.log("Hello")
//         firstNumber = gomb;
//         console.log("gomb :",gomb)
//         $("#displayNumber1").html(firstNumber);
//     }
//     else if(firstNumber != undefined){
//         if(gomb == '+' || '-' || '*' || '/' )
//         {
//             operand = gomb;
//             $("#displayOperantus").html(firstNumber);
//         }
//     }
//     else if(operand =! undefined){
//         secondNum = gomb;
//         $("#displayNumber2").html(firstNumber);
//     }
//     else if(gomb == '='){
//         switch(operand){
//             case '+' :
//                 done = firstNumber + secondNum;
//                 console.log(done);
//                 break;
//             case '-' :
//                 done = firstNumber - secondNum;
//                 console.log(done);
//                 break;
//             case '*' :
//                 done = firstNumber * secondNum;
//                 console.log(done);
//                 break;
//             case '/' :
//                 done = firstNumber / secondNum;
//                 console.log(done);

//                 break;
//             default :
//                 console.log("Defaultba belefutott")
//                 // $("#displayNumber1").html("0");
//             }
//         $("#displayNumber1").html(done);
//         $("#displayOperantus").html("");
//         $("#displayNumber2").html("");
//     }
// });