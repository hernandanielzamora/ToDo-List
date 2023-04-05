import { ls } from './localstorage.js';

const deployList = () => {
  const taskList = document.getElementById('task-list');
  const list = ls();
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

exports.deployList = deployList;
