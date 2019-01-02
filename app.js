function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "-";
    deleteButton.className = "delete-button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab";

    deleteButton.addEventListener('click', function(event){
      let buttonLiText = this.parentElement.childNodes[0].textContent;
      toDoList.removeChild(this.parentElement)
    });

    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

  });
}

window.onload = function () {
  onReady();
};
