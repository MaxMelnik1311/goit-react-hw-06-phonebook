import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import Contact from './Contact';

function ContactList({ contactList }) {
  return (
    <ul>
      {contactList.map(({ id }) => (
        <Contact key={id} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: T.arrayOf({}).isRequired,
};

const mapStateToProps = state => {
  const visibleContacts = state.phonebook.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase()),
  );

  return {
    contactList: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
