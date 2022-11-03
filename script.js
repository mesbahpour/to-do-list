let toDoList = [
    {title:'Task1', TaskStatus:'uncompleted'},
]


let container = document.querySelector('.todo-list');

    toDoList.forEach(element => {
        let div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("todo");
        
          div.innerHTML = `
          <li class="todo-item">${element.title}</li>
          <button class="complete-btn"><i class="fas fa-check"></i></button>
          <button class="trash-btn"><i class="fas fa-trash"></i></button>
          `

        if(element.TaskStatus=='completed') {
            div.classList.toggle('completed');
        }
  });


function addToList() {
    let div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("todo");

    let input = document.getElementById('input');
    const obj  = {title: input.value, TaskStatus:'all'};
    toDoList.push(obj);
    console.log(toDoList);
    div.innerHTML = `
    <li class="todo-item">${obj.title}</li>
    <button class="complete-btn"><i class="fas fa-check"></i></button>
    <button class="trash-btn"><i class="fas fa-trash"></i></button>
    `
    input.value = '';
}


container.addEventListener("click", deleteCompleteTodo);

function deleteCompleteTodo(event){
    const item = event.target;
    parent = item.parentElement;
    dblPar = parent.parentElement;

    if(event.target.classList.value== 'fas fa-check'){
        dblPar.classList.toggle('completed');

    let found = toDoList.find(function (element) {
        return element.title == dblPar.childNodes[1].innerHTML;
    });

    found.TaskStatus = 'completed';
    console.log(toDoList);

    }else{
        let index = toDoList.map((item) => item.title).indexOf(dblPar.childNodes[1].innerHTML);
        if (index > -1) {
            toDoList.splice(index, 1);
        }
        dblPar.remove();
    }


}


function filterTodo(event) {
    const todos = container.childNodes;
    todos.forEach(function (todo) {

        if(todo.classList) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
        }
    }

        
    })
}

const filterOption = document.querySelector(".filter-todo");
filterOption.addEventListener("click", filterTodo);