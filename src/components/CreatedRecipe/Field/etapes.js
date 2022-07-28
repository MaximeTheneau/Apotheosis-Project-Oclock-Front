import PropTypes from 'prop-types';

function Etape({ onChange }) {
  return (
    <textarea
      placeholder="Votre étape"
      rows="1"
      onChange={onChange}
    />
  );
}
Etape.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Etape;
