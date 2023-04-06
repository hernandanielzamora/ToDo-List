/**
 * @jest-environment jsdom
 */

import { addToList, removeList } from '../src/modules/functionality.js';

jest.mock('../__mock__/testlist');

describe('Testing add and remove functions', () => {
  test('Adding a new task', () => {
    /* Arrange */
    document.body.innerHTML = '<form class="list-form">'
      + '<input id="task-input" type="text" placeholder="Add to your list..." value="newTask">'
      + '<i class="fas fa-arrow-left" id="submit-icon"></i>'
      + '</form>';

    const list = JSON.parse(localStorage.getItem('list')) || []; // [1]

    /* Act */
    addToList('clicked'); // [2] list.length + 1
    const newList = JSON.parse(localStorage.getItem('list'));
    const newListLength = newList.length;

    /* Assert */
    expect(newListLength).toBe(list.length + 1);
    expect(newList[newListLength - 1].description).toBe('newTask');
  });
  test('Removing a task', () => {
    /* Arrange */
    const list = JSON.parse(localStorage.getItem('list'));

    /* Act */
    removeList(1);
    const newList = JSON.parse(localStorage.getItem('list'));

    /* Assert */
    expect(newList.length).toBe(list.length - 1);
  });
});
