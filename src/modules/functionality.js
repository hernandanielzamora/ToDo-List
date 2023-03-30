let list = JSON.parse(localStorage.getItem('list')) || []; // eslint-disable-line

const taskList = document.getElementById('task-list');

/* Deploy List */
const deployList = () => {
  taskList.innerHTML = '';
  list = JSON.parse(localStorage.getItem('list'));
  list.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'task-content';
    taskCard.id = `${task.id}`;
    taskCard.innerHTML = `<div class="task-text" id="${task.id}">
                            ${task.completed === true ? `
                            <input type="checkbox" checked id="checkbox" class="checked"></input>` : '<input type="checkbox" id="checkbox" class="unchecked"></input>'}
                            <input class="${task.completed === true ? 'completed task-edit' : 'task-edit'}"
                              type="text" value="${task.description}">
                            </input>
                          </div>
                          <i class="fa-solid fa-trash-can delete-task" id="delete-task"></i>`;
    taskList.appendChild(taskCard);
  });
};

/* Add To List */
const newTask = document.getElementById('task-input');
const addToList = (e) => {
  if (newTask.value === '') return;
  if (e.key === 'Enter' || e === 'clicked') {
    const taskItem = {
      description: newTask.value,
      completed: false,
      id: list.length + 1,
    };

    newTask.value = '';
    list = [...list, taskItem];
    localStorage.setItem('list', JSON.stringify(list));
    deployList();
  }
};

/* Edit List Value */
const editList = ({ index, event }) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    list[index - 1].description = event.target.value;
    localStorage.setItem('list', JSON.stringify(list));
  }
};

/* Remove List Value */
const removeList = (targetI) => {
  const listFiltered = list.filter((item) => +item.id !== +targetI);
  const newList = listFiltered.map((item, id) => ({
    description: item.description,
    completed: item.completed,
    id: id + 1,
  }));
  localStorage.setItem('list', JSON.stringify(newList));
  list = newList;
  deployList();
};

/* Update UI */
const updateUI = (data) => {
  list = data;
  deployList();
};

export {
  deployList, addToList, editList, removeList, list, updateUI,
};