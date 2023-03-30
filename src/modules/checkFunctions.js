import { list, deployList, updateUI } from './functionality.js';

const checkedBox = ({ index, status }) => {
  list[index - 1].completed = status;
  localStorage.setItem('list', JSON.stringify(list));
  deployList();
};

const removeCompletedTodos = () => {
  const uncompletedTodos = list.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('list', JSON.stringify(newTodos));
  updateUI(newTodos);
};

export { checkedBox, removeCompletedTodos };