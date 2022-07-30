import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAction, ingredientAction, toogleIngredients } from '../../../action/createdRecipe';

function Ingredient({ onChange }) {
  const dispatch = useDispatch();

  const valueIngredient = useSelector((state) => state.createdRecipe.ingredient);
  const TooglelistIngredients = useSelector((state) => state.createdRecipe.TooglelistIngredients);

  const listIngredients = useSelector((state) => state.createdRecipe.listIngredients);

  return (
    <>
      <select onChange={onChange}>
        <option>----</option>
        { listIngredients.map((item) => (
          <option value={valueIngredient}>{item.name}</option>))}
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
