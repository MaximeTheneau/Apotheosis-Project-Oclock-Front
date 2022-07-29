import PropTypes from 'prop-types';

function option({ value }) {
  return (
    <>
    {
      AlistIngredients.map((item) => (
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
