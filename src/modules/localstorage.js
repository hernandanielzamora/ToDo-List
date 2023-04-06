const ls = () => (JSON.parse(localStorage.getItem('mylist')) ? JSON.parse(localStorage.getItem('mylist')) : []);

const setStorage = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
};

export { ls, setStorage };