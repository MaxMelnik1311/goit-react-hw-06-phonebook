import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phoneBook/addContact', (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction('phoneBook/deleteContact');
const filteredContacts = createAction('phoneBook/filteredContacts');
const clearFilterValue = createAction('phoneBook/clearFilterValue');
const nightRegimeToggler = createAction('phoneBook/nightRegimeToggler');

export {
  addContact,
  deleteContact,
  filteredContacts,
  clearFilterValue,
  nightRegimeToggler,
};
