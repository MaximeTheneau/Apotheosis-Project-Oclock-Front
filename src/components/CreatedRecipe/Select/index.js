import PropTypes from 'prop-types';

function Option({ value }) {
  return (
    <>
      {
        listIngredients.map((item) => (
          <option
            value={value}
            >
          {item.name}
        </option>
        )) }
      </>


  );
}
Option.propTypes = {
  value: PropTypes.func.isRequired,
};

export default Option;
