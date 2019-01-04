function onReady () {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: i++
    });

    newToDoText.value = '';

    renderTheUI();
  }


  function renderTheUI () {
    const toDoList = document.getElementById('toDoList');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "-";
    deleteButton.className = "delete-button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab";

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDos.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  deleteButton.addEventListener('click', event => {
    event.preventDefault();
    toDoList.removeChild(newLi);
  })

  renderTheUI();
}

window.onload = function () {
  onReady();
};
