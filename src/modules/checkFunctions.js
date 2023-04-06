import { setStorage } from './localstorage.js';

const { deployList } = require('./deploy.js');

const checkedBox = ({ index, status }) => {
  const list = JSON.parse(localStorage.getItem('list'));
  list[index - 1].completed = status;
  setStorage(list);
  deployList();
};

const removeCompletedTodos = () => {
  const list = JSON.parse(localStorage.getItem('list'));
  const uncompletedTodos = list.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  setStorage(newTodos);
  deployList();
};

export { checkedBox, removeCompletedTodos };