import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import {
  filteredContacts,
  clearFilterValue,
} from '../../redux/phoneBook/phoneBookActions';

function Filter({ contacts, value, onChangeFilter, clearFilter }) {
  if (contacts.length === 1) {
    clearFilter();
  }
  return (
    <>
      {contacts.length > 1 && (
        <div>
          <input value={value} onChange={e => onChangeFilter(e.target.value)} />
        </div>
      )}
    </>
  );
}

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
  contacts: T.shape.isRequired,
  clearFilter: T.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.filter,
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = {
  onChangeFilter: filteredContacts,
  clearFilter: clearFilterValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
