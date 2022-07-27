import PropTypes from 'prop-types';

function Etape({onChange}) {
  return (
    <>
      <textarea
        placeholder="Etape 1"
        rows="1"
        onChange={onChange}
      />
      <i className="icon-add" />
    </>
  );
}
Etape.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Etape;
