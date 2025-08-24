let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#restart");
let newGamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
const enabled = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }}
const disabled = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwin();
    })

});
const checkwin = () =>{
    for(let pattern of winPattern){
        let patVal1 = boxes[pattern[0]].innerText;
        let patVal2 = boxes[pattern[1]].innerText;
        let patVal3 = boxes[pattern[2]].innerText;
        if(patVal1 != "" && patVal1 != "" &&  patVal1 != "" ){
            if(patVal1 === patVal2 && patVal2 === patVal3){
              showWinner(patVal1);
               disabled();
            }
    }
}
}
const restartGame=()=>{
    turnO = true;
    enabled();
    msgContainer.classList.add("hide");
}
rest.addEventListener("click",restartGame);
newGamebtn.addEventListener("click",restartGame);
const showWinner = (winner) =>{
    msg.innerText = `Congratulations! ${winner} is the winner!`;
    msgContainer.classList.remove("hide");
    disabled();
}