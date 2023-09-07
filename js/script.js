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
    savelocalStorage(textinput.value)

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


function savelocalStorage(todo) {
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos))
}


listtodo.addEventListener("click",startlist)

function startlist(event) {
     const item =event.target;
     if (item.classList[0] === "terash"){
         const items =item.parentElement;
         items.classList.toggle("active");
     }if (item.classList[0] === "cloes"){
        const items =item.parentElement;
        items.remove();
        removelocal(todo);
    }
}

function removelocal(todo) {
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex =todo.children[0].innerText;
         todos.splice(todos.indexOf(todoindex), 1);
         localStorage.setItem("todos",JSON.stringify("todos"))
}