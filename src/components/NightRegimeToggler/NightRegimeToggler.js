import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { nightRegimeToggler } from '../../redux/phoneBook/phoneBookActions';

const NightRegimeToggler = ({ nightRegime, onToggle }) => (
  <>
    <button type="button" onClick={() => onToggle()}>
      {nightRegime ? 'Night Regime' : 'Day Regime'}
    </button>
  </>
);

NightRegimeToggler.propTypes = {
  nightRegime: T.bool.isRequired,
  onToggle: T.func.isRequired,
};

const mapStateToProps = state => ({
  nightRegime: state.phonebook.nightRegime,
});

const mapDispatchToProps = { onToggle: nightRegimeToggler };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NightRegimeToggler);
