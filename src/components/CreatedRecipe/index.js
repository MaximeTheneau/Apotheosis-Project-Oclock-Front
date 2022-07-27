import { useDispatch, useSelector } from 'react-redux';
import { difficultyAction, durationAction, titleAction, typeAction, ingredientAction, unitAction, quantityAction } from '../../action/createdRecipe';
import './styles.scss';

function CreatedRecipe() {
  const dispatch = useDispatch();
  const valueTitle = useSelector((state) => state.title);
  // const valueIngredient = useSelector((state) => state.ingredients);
  const valueType = useSelector((state) => state.type);
  const valueDifficulty = useSelector((state) => state.createdRecipe.difficulty);
  const valueDuration = useSelector((state) => state.createdRecipe.difficulty);
  const valueIngredient = useSelector((state) => state.createdRecipe.ingredient);
  const valueUnit = useSelector((state) => state.createdRecipe.recipeIngredients.unit);
  // console.log(valueUnit);
  const valueQuantity = useSelector((state) => state.createdRecipe.recipeIngredients.quantity);


  // console.log(valueTitle);
  const handleChangeTitle = ((evt) => {
    dispatch(titleAction(evt.target.value, 'title'));
  });
  const handleChangeType = ((evt) => {
    dispatch(typeAction(evt.target.value, 'type'));
  });
  const handleChangeDifficulty = ((evt) => {
    dispatch(difficultyAction(evt.target.value, 'difficulty'));
  });
  const handleChangeTime = ((evt) => {
    dispatch(durationAction(evt.target.value, 'duration'));
  });


  return (
    <div className="createdRecipe">
      <h1>Créer Une recette</h1>
      <form>
        <div>
          <span className="label-title">Title</span>
          <input type="text" onChange={handleChangeTitle} value={valueTitle} />
        </div>
        <div className="form-radio" onChange={handleChangeType}>
          <span className="label-title">Type</span>
          <input type="radio" value="1" checked={valueDifficulty} name="Type" /> <i className="icon-drink" />
          <input type="radio" value="2" checked={valueDifficulty} name="Type" /> <i className="icon-entrance" /> <i className="icon-kitchen-hat"/>
          <input type="radio" value="3" checked={valueDifficulty} name="Type" /> <i className="icon-dish" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
          <input type="radio" value="3" checked={valueDifficulty} name="Type" /> <i className="icon-cake" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
        </div>
        <div className="form-radio" onChange={handleChangeDifficulty}>
          <span className="label-title">Difficulty</span>
          <input type="radio" value="1" checked={valueType} name="Difficulty" /> <i className="icon-kitchen-hat" />
          <input type="radio" value="2" checked={valueType} name="Difficulty" /> <i className="icon-kitchen-hat" /> <i className="icon-kitchen-hat"/>
          <input type="radio" value="3" checked={valueType} name="Difficulty" /> <i className="icon-kitchen-hat" /> <i className="icon-kitchen-hat" /> <i className="icon-kitchen-hat" />
        </div>
        <div>
          <span className="label-title">Temps</span>
          <input
            type="number"
            placeholder="1"
            onChange={handleChangeTime}
            value={valueDuration}
          />
        </div>
        <div>
          <span className="label-title">Image</span>
          <input type="file" value="" />
        </div>
        <div>
          <span className="label-title">Ingredient pour 4 personnes.</span>
          <div className="ingredients">
            <div className="ingredients-add">
              <input
                className="ingredients-type"
                type="text"
                onChange={(evt) => dispatch(ingredientAction(evt.target.value, 'ingredient'))}
                value={valueIngredient}
              />
              <input
                className="ingredients-type"
                type="text"
                onChange={(evt) => dispatch(unitAction(evt.target.value, 'unit'))}
                value={valueUnit}

              />
              <input
                className="ingredients-type"
                type="number"
                onChange={(evt) => dispatch(quantityAction(evt.target.value, 'quantity'))}
                value={valueQuantity}

              />
              <i className="icon-add" />
            </div>
          </div>
        </div>
        <div>
          <span className="label-title">Etape 1</span>
          <div className="etape">
            <div className="etape-add">
              <textarea
                placeholder="Etape 1"
                rows="1"
              />
              <i className="icon-add" />
            </div>
            <button type="submit">Envoyer <i className="icon-oven-open" /></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatedRecipe;
