import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phoneBook/phoneBookActions';
import Contact from './Contact';

function ContactList({ contactList, deleteItem }) {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          removeContact={() => deleteItem(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: T.arrayOf({}).isRequired,
  deleteItem: T.func.isRequired,
};

const mapStateToProps = ({ phonebook }, { id }) => {
  const visibleContacts = phonebook.contacts.filter(contact =>
    contact.name.toLowerCase().includes(phonebook.filter.toLowerCase()),
  );

  return {
    contactList: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteContact(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList);
