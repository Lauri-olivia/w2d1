// access an element through it's id

const todoList = document.getElementById("todo-list");

// console.log(todoList);

const allListItems = document.getElementsByTagName("li");

// console.log(allListItems);

let todoListItems = todoList.getElementsByTagName("li");
// html collections
// console.log(todoListItems);

todoListItems[0].innerHTML = "buy tomatoes";

todoListItems[2].innerHTML = todoListItems[2].innerHTML.toUpperCase();

for (let i = 0; i < todoListItems.length; i++) {
  const item = todoListItems[i];
  item.innerHTML = item.innerHTML.toUpperCase();
}

// [...todoListItems].forEach()
Array.from(todoListItems).forEach(function(item) {
  item.innerText = item.innerText.toUpperCase();
  item.innerHTML = `<em>
    ${item.innerText}
    </em>`;
});

let container = document.getElementsByClassName("container");

// console.log(container);

// to select via CSS selector
container = document.querySelectorAll(".container");

// console.log(container);

todoListItems = document.querySelectorAll("#todo-list li");

console.log(todoListItems);

// find the first occurence
const firstTodo = document.querySelector("#todo-list li");

console.log(firstTodo);

// adding a style property through the .style

/*

firstTodo.style.textDecoration = "line-through";

firstTodo.style["text-decoration"] = "line-through";

firstTodo.style.color = "green";

firstTodo.style["background-color"] = "pink";

console.log(firstTodo.style);

*/

// adding a className

firstTodo.className = "checked visible";

// console.log(firstTodo.classList);

firstTodo.classList.remove("checked");

firstTodo.classList.add("checked");

firstTodo.id = "first-todo";

firstTodo.setAttribute("id", "first-todo");

console.log(firstTodo.getAttribute("id"));

firstTodo.removeAttribute("id");
