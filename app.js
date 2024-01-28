let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetgame");
let newgamebtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(" .msgcontainer");
let msg=document.querySelector("#msg");
let turnO=true;
//2D Array
const Win_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
//add event listener to each box
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if (turnO==true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
//function for showing winner
const showwinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
// function for checking winner
const checkWinner=()=>{
    for(let pattern of Win_pattern){
        //checking for each indexes
            let pos1=boxes[pattern[0]].innerText;
            let pos2= boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
       
            if (pos1!="" && pos2.val!="" && pos3.val!=""){
                if(pos1===pos2 && pos2===pos3){
                    console.log("winner",pos1);

                    showwinner( pos1);
                }
            }
        }

};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);