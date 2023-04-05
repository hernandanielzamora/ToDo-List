/* Imports */
import './styles.css';
import {
  addToList, editList, removeList,
} from './modules/functionality.js';
import {
  checkedBox, removeCompletedTodos,
} from './modules/checkFunctions.js';

const { deployList } = require('./modules/deploy.js');

const taskList = document.getElementById('task-list');
const newTask = document.getElementById('task-input');
const submit = document.getElementById('submit-icon');

/* Add To List */
newTask.addEventListener('keypress', (e) => {
  addToList(e);
});

/* Add to List (clicked) */
submit.addEventListener('click', () => {
  addToList('clicked');
});

/* Delete Task */
taskList.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-task') {
    removeList(li.id);
    event.target.parentElement.remove();
  }
  if (clickedItem === 'checked') {
    checkedBox({ index: li.id, status: false });
  }
  if (clickedItem === 'unchecked') {
    checkedBox({ index: li.id, status: true });
  }
});

/* Edit Task */
taskList.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'task-edit') {
    editList({ index: li.id, event });
  }
});

/* Delete all done tasks */
const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
  removeCompletedTodos();
});

document.addEventListener('DOMContentLoaded', deployList());