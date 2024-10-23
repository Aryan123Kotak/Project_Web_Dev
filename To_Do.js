let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click" , function(e)
{
  let li = document.createElement("li");
  li.innerText = inp.value;
  ul.appendChild(li);
  inp.value = "";
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  li.appendChild(delBtn);
});

ul.addEventListener("click" , function(event)
{
  if(event.target.nodeName == "BUTTON")
  {
      let item = event.target.parentElement;
      item.remove();
  }
  console.log("button clicked");
})

//let delBtns = document.querySelectorAll(".delete");
//for(delBtn of delBtns)
//{
//    delBtn.addEventListener("click" , function()
//{
//    let par = this.parentElement;
//    console.log(par);
//    par.remove();
//})
//}