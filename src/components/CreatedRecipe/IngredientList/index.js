import PropTypes from 'prop-types';
import {  useDispatch, useSelector } from 'react-redux';
import { ingredientAction, quantityAction, toggleCreatedIngredients, unitAction } from '../../../action/createdRecipe';
import Ingredient from '../Ingredient';
import Quantity from '../Quantity';
import Unit from '../Unit';

function IngredientList() {
  const dispatch = useDispatch();
  const listIngredientsFull = useSelector((state) => state.createdRecipe.listIngredients);
  const clickCount = useSelector((state) => state.createdRecipe.toogleCreatedIngredients1);
  const listIngredients = listIngredientsFull.slice(0, `${clickCount}`);
  return (
    <>
      { listIngredients.map((item) => (
        <div className="ingredient">
          <Ingredient onChange={(evt) => dispatch(ingredientAction(evt.target.value, `ingredient${item.id}`))} />
          <Unit onChange={(evt) => dispatch(unitAction(evt.target.value, `unit${item.id}`))} />
          <Quantity onChange={(evt) => dispatch(quantityAction(evt.target.value, `quantity${item.id}`))} />
        </div>
      ))}
    </>

  );
}
IngredientList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default IngredientList;