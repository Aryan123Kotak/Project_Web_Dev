let gameSeq =[];
let userSeq =[];
let started = false;
let level = 0;
let btns = ["yellow","red","green","purple"];
let h3 = document.querySelector("h3");
document.addEventListener("keypress" , function()
{
    if(started  == false)
    {
        console.log("game started");
        started =true;   
        levelUp();
        
    }
    
});
function gameFlesh(btn)
{
      btn.classList.add("flash");
      setTimeout(function()
    {
        btn.classList.remove("flash");
    }, 200);
}
function userFlesh(btn)
{
      btn.classList.add("userflash");
      setTimeout(function()
    {
        btn.classList.remove("userflash");
    }, 200);
}
function levelUp()
{
    userSeq =[];
    level++;
    h3.innerText = `level ${level}`;
    let ramInd = Math.floor(Math.random()*4);
    let ramcolor = btns[ramInd];
    let ranbtn = document.querySelector(`.${ramcolor}`);
    //console.log(ramInd);
    //console.log(ramcolor);
    //console.log(ranbtn);
    gameSeq.push(ramcolor);
    console.log(gameSeq);
    gameFlesh(ranbtn);
}
function checkAns(idx)
{
    //console.log("current level :" , level);
    if(userSeq[idx] == gameSeq[idx])
    {
       if(userSeq.length == gameSeq.length)
       {
        setTimeout(levelUp , 1000);
           
       }
    }
    else
    {
        h3.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function()
    {
        document.querySelector("body").style.backgroundColor = "black";
    }, 200);
        reset();
    }
}
function btnPress()
{
    //console.log(this);
    let btn = this;
    userFlesh(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".div");
for(btn of allBtns)
{
    btn.addEventListener("click" , btnPress);
}

function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}