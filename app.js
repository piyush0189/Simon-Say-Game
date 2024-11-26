let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);

    
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSq =[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor =btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);

}

function checkAns(idx){
    // console.log("curr level" ,level);
    // let idx = level - 1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            // levelUp();
            setTimeout(levelUp,1000);
        }

    }else{
        h2.innerHTML = `game over! your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
    
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}
