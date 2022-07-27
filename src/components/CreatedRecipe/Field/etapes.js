import PropTypes from 'prop-types';

function Etape({ onChange, onClick }) {
  return (
    <div className="step">
      <textarea
        placeholder="Votre étapes"
        rows="1"
        onChange={onChange}
      />
      <i className="icon-add" onClick={onClick} />
    </div>
  );
}
Etape.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Etape;
