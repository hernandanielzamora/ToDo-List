/**
 * @jest-environment jsdom
 */

import { editList } from '../src/modules/functionality.js';
// import { checkedBox, removeCompletedTodos } from '../src/modules/checkFunctions.js';

jest.mock('../__mock__/testlist');

const editStorage = [
  {
    index: 1,
    description: 'test',
    completed: false,
  },
  {
    index: 2,
    description: 'test2',
    completed: false,
  },
  {
    index: 3,
    description: 'test3',
    completed: false,
  },
];

describe('Edit Task Description', () => {
  test('Editing Tasks', () => {
    /* Arrange */
    const inputTask = {
      index: 2,
      event: {
        key: 'Enter',
        target: {
          value: 'updated item',
        },
      },
    };

    localStorage.setItem('list', JSON.stringify(editStorage));

    /* Act */
    editList(inputTask);

    const editedList = JSON.parse(localStorage.getItem('list'));

    /* Assert */
    expect(editedList[inputTask.index - 1].description).toBe('updated item');
  });
});
