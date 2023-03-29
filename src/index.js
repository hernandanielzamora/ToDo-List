/* Imports */
import './styles.css';
import {
  deployList, addToList, editList, removeList,
} from './modules/functionality.js';

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
});

/* Edit Task */
taskList.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'task-edit') {
    editList({ index: li.id, event });
  }
});

document.addEventListener('DOMContentLoaded', deployList());