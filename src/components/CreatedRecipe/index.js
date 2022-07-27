import { useDispatch, useSelector } from 'react-redux';
import { difficultyAction, durationAction, titleAction, typeAction, ingredientAction, unitAction, quantityAction, etapeAction } from '../../action/createdRecipe';
import Etape from './Field/etapes';
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
  const valueQuantity = useSelector((state) => state.createdRecipe.recipeIngredients.quantity);
  const valueEtape = useSelector((state) => state.createdRecipe.steps.etape1);
  const valueEtape2 = useSelector((state) => state.createdRecipe.steps.etape2);
  const valueEtape3 = useSelector((state) => state.createdRecipe.steps.etape3);
  const valueEtape4 = useSelector((state) => state.createdRecipe.steps.etape4);
  const valueEtape5 = useSelector((state) => state.createdRecipe.steps.etape5);
  const valueEtape6 = useSelector((state) => state.createdRecipe.steps.etape6);
  const valueEtape7 = useSelector((state) => state.createdRecipe.steps.etape7);
  const valueEtape8 = useSelector((state) => state.createdRecipe.steps.etape8);
  const valueEtape9 = useSelector((state) => state.createdRecipe.steps.etape9);




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
          <input 
            type="text"
            onChange={handleChangeTitle}
            value={valueTitle}
            placeholder="Titre de votre recette"
          />
        </div>
        <div className="form-radio" onChange={handleChangeType} >
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
            placeholder="15"
            onChange={handleChangeTime}
            value={valueDuration}
          />
          <span className="label-description">min</span>
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
                type="number"
                onChange={(evt) => dispatch(quantityAction(evt.target.value, 'quantity'))}
                value={valueQuantity}
                placeholder="1"
              />
              <input
                className="ingredients-type"
                type="text"
                onChange={(evt) => dispatch(unitAction(evt.target.value, 'unit'))}
                value={valueUnit}
                placeholder="cl"
              />
              <input
                className="ingredients-type"
                type="text"
                onChange={(evt) => dispatch(ingredientAction(evt.target.value, 'ingredient'))}
                value={valueIngredient}
                placeholder="Lait"
              />

              <i className="icon-add" />
            </div>
          </div>
        </div>
        <div>
          <span className="label-title">Etape 1</span>
          <div className="steps">
            <div className="etape-add">
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape1'))}
                value={valueEtape}
                />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape2'))}
                value={valueEtape2}
              />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape3'))}
                value={valueEtape3}
              />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape4'))}
                value={valueEtape4}
              />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape5'))}
                value={valueEtape5}
              />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape6'))}
                value={valueEtape6}
              />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape7'))}
                value={valueEtape7}
              />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape8'))}
                value={valueEtape8}
              />
              <Etape
                onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape9'))}
                value={valueEtape9}
              />
            </div>
            <button type="submit">Envoyer <i className="icon-oven-open" /></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatedRecipe;
