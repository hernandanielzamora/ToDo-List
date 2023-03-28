/* Imports */
import './styles.css';

const activitiesToDo = [
  {
    description: 'First To Do',
    completed: false,
    id: 1,
  },
  {
    description: 'Second To Do',
    completed: false,
    id: 2,
  },
  {
    description: 'Third To Do',
    completed: false,
    id: 3,
  },
];

const taskContainer = document.getElementById('task-list');

const showTasks = () => {
  activitiesToDo.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList = 'task-content';
    taskCard.innerHTML = `<div class="task-text">
                            <i class="fa-pen-to-square fa-regular" id="check-box"></i>
                            <p class="task-text">${task.description}</p>
                          </div>
                          <i class="fa-solid fa-trash-can" id="delete-task"></i>`;
    taskContainer.appendChild(taskCard);
  });
};

showTasks();
