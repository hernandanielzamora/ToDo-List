import { setStorage, ls } from './localstorage.js';
/* import { deployList } from './deploy.js'; */
const { deployList } = require('./deploy.js');

/* Add To List */
const addToList = (e) => {
  const list = ls();
  const taskGroup = document.querySelector('.list-form');
  const newTask = taskGroup.querySelector('input');
  if (newTask.value === '') return;
  if (e.key === 'Enter' || e === 'clicked') {
    const taskItem = {
      description: newTask.value,
      completed: false,
      id: list.length + 1,
    };

    newTask.value = '';
    list.push(taskItem);
    setStorage(list);
    deployList();
  }
};

/* Edit List Value */
const editList = ({ index, event }) => {
  const list = ls();
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    list[index - 1].description = event.target.value;
    localStorage.setItem('list', JSON.stringify(list));
  }
};

/* Remove List Value */
const removeList = (targetI) => {
  let list = ls();
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

/* Export functions */
export {
  addToList, editList, removeList/* , updateUI */,
};