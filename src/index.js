document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  let todo = document.getElementById("tasks");

  //Form submit event
  form.addEventListener("submit", addtodo);
  //Delete event
  todo.addEventListener("click", removeList);

  //Add list
  function addtodo(e) {
    e.preventDefault();
    //Get input value
    let newtodo = document.getElementById("new-task-description").value;

    //create new li element
    let li = document.createElement("li");

    //add text node with input value
    li.appendChild(document.createTextNode(newtodo));

    //create delete button
    let deleteBtn = document.createElement("button");
    //create text node
    deleteBtn.appendChild(document.createTextNode("x"));
    //append delete to li
    li.appendChild(deleteBtn);

    todo.appendChild(li);
  }
  function removeList(e) {
    if (e.target.matches("button")) {
      let li = e.target.parentElement;
      todo.removeChild(li);
    }
  }
});
