
let addForm = document.addfrm;
let text = addForm.add;
let ul = document.querySelector(".todos");
let done=document.querySelector(".done");
let conclusion=document.querySelector(".score");
let count=0;
let complete=0;
ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.remove();
  }
  if(count>0)
  {count--;}
  displayScore(conclusion);
});
let addItem = (item) => {
  let str = `<li
   class="list-group-item d-flex justify-content-between align-items-center"
 >
   <span>${item}</span>
  
   <i class="far fa-trash-alt delete" id="del"></i>
 </li>`;
  ul.innerHTML += str;
  count++;
displayScore(conclusion);
  //call score
  
  console.log("count is"+count);
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value;
  if (item.length > 0) {
    addItem(item);
  }
  text.value = "";
});
let searchItem = (text) => {
  let listitems = ul.children;
  for (let li of listitems) {
    if (li.innerText.toLowerCase().indexOf(text) === -1) {
      li.classList.add("filtered");
    } else {
      li.classList.remove("filtered");
    }
  }
};

let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
  searchItem(searchText.value.toLowerCase());
});


let displayScore = (item) => {
  let str = `You completed ${complete} tasks out of ${count} tasks`;
  conclusion.innerText = str;
 
 
};



done.addEventListener("click",(e)=>{

  e.preventDefault();
  e.target.css("color","green");
  
});



