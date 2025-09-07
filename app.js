//we are using vh for providing some percentage of the actual height
// the use of vmin is also the same in css.
//we are using script as the code written in js is executable so for this reason it is used.
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;// playerx,playery;
 
const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
msgcontainer.classList.add("hide");
const resetgame =() => {
 turno = true;
 enableboxes();
  msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
box.addEventListener("click",() =>{
    console.log("box was clicked");
    if(turno){
    box.innerText ="o";
    turno = false;
    }else{//playerx
        box.innerText ="x";
        turno = true;
    }
    box.disabled = true;
 checkwinner();
});
});
const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const showwinner = (winner) =>{
    msg.innerText = `congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
        resetbtn.classList.add("hide");
    disableboxes();
};
const showwtie = (tie) =>{
    msg.innerText = `congratulations,Match is tie  ${tie}`;
    msgcontainer.classList.remove("hide");
        resetbtn.classList.add("hide");
    disableboxes();
};
const checkwinner =() =>{
     for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
       if (pos1val != "" && pos2val != "" && pos3val != "") {
        if(pos1val == pos2val && pos2val == pos3val){
           
            console.log("Winner");
           showwinner(pos1val);
           
           
         
        }
       }
     }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
