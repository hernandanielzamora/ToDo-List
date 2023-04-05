import { setStorage, ls } from './localstorage.js';

const { deployList } = require('./deploy.js');

const checkedBox = ({ index, status }) => {
  const list = ls();
  list[index - 1].completed = status;
  setStorage(list);
  deployList();
};

const removeCompletedTodos = () => {
  const list = ls();
  const uncompletedTodos = list.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('list', JSON.stringify(newTodos));
  setStorage(newTodos);
  deployList();
};

export { checkedBox, removeCompletedTodos };