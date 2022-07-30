import PropTypes from 'prop-types';
import {  useSelector } from 'react-redux';

function Ingredient({ onChange }) {
  const valueIngredient = useSelector((state) => state.createdRecipe.ingredient);
  const listIngredients = useSelector((state) => state.createdRecipe.listIngredients);

  return (
    <>
      <select onChange={onChange}>
        <option>----</option>
        { listIngredients.map((item) => (
          <option value={item.id}>{item.name}</option>))}
      </select>

      <input
        className="ingredients-type"
        type="text"
        onChange={onChange}
        value={valueIngredient}
        placeholder="Lait"
      />

    </>

  );
}
Ingredient.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Ingredient;
