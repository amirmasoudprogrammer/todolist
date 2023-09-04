const addtolist=document.querySelector(".add-tolist");
const textinput=document.querySelector(".text-input");
const listtodo=document.querySelector(".list-todo");
const noeneye=document.querySelector(".noen-eye");

addtolist.addEventListener("click",starttodo);

function starttodo() {
   const list_div=document.createElement("div");
   list_div.classList.add("text-list");

   const input=document.createElement("input");
   input.type="checkbox";
    list_div.appendChild(input);

   const li_list=document.createElement("li");
   li_list.innerText=textinput.value;
   list_div.appendChild(li_list);

   textinput.value="";


   const button=document.createElement("button");
   button.innerHTML="<i class=\"las la-pen\"></i>";
   button.classList.add("terash");
    list_div.appendChild(button);


    const buttons=document.createElement("button");
    buttons.innerHTML="<i class=\"las la-times\"></i>";
    buttons.classList.add("cloes");
    list_div.appendChild(buttons);

    listtodo.appendChild(list_div)

}