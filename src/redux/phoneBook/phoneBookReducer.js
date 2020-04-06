import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filteredContacts,
  clearFilterValue,
  nightRegimeToggler,
} from './phoneBookActions';

const contacts = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload.contact],
  [deleteContact.type]: (state, { payload }) =>
    state.filter(element => payload !== element.id),
});

const filter = createReducer('', {
  [clearFilterValue.type]: (state, action) => '',
  [filteredContacts.type]: (state, { payload }) => payload,
});

const nightRegime = createReducer(true, {
  [nightRegimeToggler]: state => !state,
});

export default combineReducers({ contacts, nightRegime, filter });
