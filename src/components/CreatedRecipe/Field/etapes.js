import PropTypes from 'prop-types';

function Etape({ onChange }) {
  return (
    <div className="step">
      <textarea
        placeholder="Votre étapes"
        rows="1"
        onChange={onChange}
      />
      <i className="icon-add" />
    </div>
  );
}
Etape.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Etape;
