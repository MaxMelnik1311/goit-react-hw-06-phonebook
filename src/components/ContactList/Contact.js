import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phoneBook/phoneBookActions';
import styles from '../../styles.module.css';

function Contact({ name, number, deleteItem, night }) {
  return (
    <li>
      <p className={night && styles.night}>
        {name}: {number}
      </p>
      <button type="button" onClick={deleteItem}>
        Delete {name} from contact list
      </button>
    </li>
  );
}

Contact.propTypes = {
  name: T.string.isRequired,
  number: T.number.isRequired,
  deleteItem: T.func.isRequired,
  night: T.bool.isRequired,
};

const mapStateToProps = ({ phonebook }, { id }) => {
  const contact = phonebook.contacts.find(item => item.id === id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteItem: () => dispatch(deleteContact(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
