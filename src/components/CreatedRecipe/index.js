import { useDispatch, useSelector } from 'react-redux';
import { difficultyAction, durationAction, titleAction, typeAction, ingredientAction, unitAction, quantityAction, etapeAction, postCreated, captionAction, toogleSteps, toogleStep9, toogleStep8, toogleStep7, toogleStep6, toogleStep5, toogleStep4, toogleSteps3, toogleSteps2 } from '../../action/createdRecipe';
import Etape from './Field/etapes';
import './styles.scss';

function CreatedRecipe() {
  const dispatch = useDispatch();

  const valueTitle = useSelector((state) => state.title);
  const valueType = useSelector((state) => state.createdRecipe.category);
  const valueCaption = useSelector((state) => state.createdRecipe.captionAction);
  const valueDifficulty = useSelector((state) => state.createdRecipe.difficulty);
  const valueTime = useSelector((state) => state.createdRecipe.duration);
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

  const toogle = useSelector((state) => state.createdRecipe.toogle);
  const toogle2 = useSelector((state) => state.createdRecipe.toogle2);
  const toogle3 = useSelector((state) => state.createdRecipe.toogle3);
  const toogle4 = useSelector((state) => state.createdRecipe.toogle4);
  const toogle5 = useSelector((state) => state.createdRecipe.toogle5);
  const toogle6 = useSelector((state) => state.createdRecipe.toogle6);
  const toogle7 = useSelector((state) => state.createdRecipe.toogle7);
  const toogle8 = useSelector((state) => state.createdRecipe.toogle8);
  const toogle9 = useSelector((state) => state.createdRecipe.toogle9);


  const handleChangeTitle = ((evt) => {
    dispatch(titleAction(evt.target.value, 'title'));
  });
  const handleChangeType = ((evt) => {
    dispatch(typeAction(evt.target.value, 'category'));
  });
  const handleChangeDifficulty = ((evt) => {
    dispatch(difficultyAction(evt.target.value, 'difficulty'));
  });
  const handleChangeTime = ((evt) => {
    dispatch(durationAction(evt.target.value, 'duration'));
  });
  const handleChangeFile = ((evt) => {
    console.log(evt.target.files[0]);
    // dispatch(durationAction(evt.target.value, 'duration'));
  });
  const handleSumbit = ((evt) => {
    evt.preventDefault();
    console.log(evt);
    dispatch(postCreated());
    // dispatch(durationAction(evt.target.value, 'duration'));
  });
  return (
    <div className="createdRecipe">
      <h1>Créer Une recette</h1>
      <form onSubmit={handleSumbit}>
        <div>
          <span className="label-title">Title</span>
          <input
            type="text"
            onChange={handleChangeTitle}
            value={valueTitle}
            placeholder="Titre de votre recette"
          />
        </div>
        <div>
          <span className="label-title">Caption</span>
          <textarea
            placeholder="Caption"
            rows="1"
            onChange={(evt) => dispatch(captionAction(evt.target.value, 'caption'))}
            value={valueCaption}
          />
        </div>
        <div className="form-radio">
          <span className="label-title">Type</span>
          <input
            name="type"
            type="radio"
            value="1"
            checked={valueType === '1'}
            onChange={handleChangeType}
          />
          <i className="icon-drink" />
          <input
            name="type"
            type="radio"
            value="2"
            checked={valueType === '2'}
            onChange={handleChangeType}
          />
          <i className="icon-entrance" />
          <input
            name="type"
            type="radio"
            value="3"
            checked={valueType === '3'}
            onChange={handleChangeType}
          />
          <i className="icon-dish" />
          <input
            name="type"
            type="radio"
            value="4"
            checked={valueType === '4'}
            onChange={handleChangeType}
          /><i className="icon-dish" />
        </div>
        <div className="form-radio" >
          <span className="label-title">Difficulty</span>
          <input
            type="radio"
            value="1"
            checked={valueDifficulty === '1'}
            onChange={handleChangeDifficulty}
          /> <i className="icon-kitchen-hat" />
          <input
            type="radio"
            value="2"
            checked={valueDifficulty === '2'}
            onChange={handleChangeDifficulty}
          /> <i className="icon-kitchen-hat" /> <i className="icon-kitchen-hat"/>
          <input
            type="radio"
            value="3"
            checked={valueDifficulty === '3'}
            onChange={handleChangeDifficulty}
          /> <i className="icon-kitchen-hat" /> <i className="icon-kitchen-hat" /> <i className="icon-kitchen-hat" />
        </div>
        <div>
          <span className="label-title">Temps</span>
          <input
            type="number"
            placeholder="15"
            onChange={handleChangeTime}
            value={valueTime}
          />
          <span className="label-description">min</span>
        </div>
        <div>
          <span className="label-title">Image</span>
          <input
            type="file"
            value=""
            onChange={handleChangeFile}
          />
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
          <span className="label-title">Etapes</span>
          <div className="steps">
            <div className="step-add">
              <div className="step">
                <span className="step-title">Étape 1</span>
                <Etape
                  onClick={() => dispatch(toogleSteps())}
                  onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape1'))}
                  value={valueEtape}
                />
              </div>
              {(toogle) ? (
                <div className="step">
                  <span className="step-title">Étape 2</span>
                  <Etape
                    onClick={() => dispatch(toogleSteps2())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape2'))}
                    value={valueEtape2}
                  />
                </div>
              ) : '' }
              {(toogle3) ? (
                <div className="step">
                  <span className="step-title">Étape 3</span>
                  <Etape
                    onClick={() => dispatch(toogleSteps3())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape3'))}
                    value={valueEtape3}
                  />
                </div>
              ) : ''}
              {(toogle4) ? (
                <div className="step">
                  <span className="step-title">Étape 4</span>
                  <Etape
                    onClick={() => dispatch(toogleStep4())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape4'))}
                    value={valueEtape4}
                  />
                </div>
              ) : ''}
              {(toogle5) ? (
                <div className="step">
                  <span className="step-title">Étape 5</span>
                  <Etape
                    onClick={() => dispatch(toogleStep5())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape5'))}
                    value={valueEtape5}
                  />
                </div>
              ) : ''}
              {(toogle6) ? (
                <div className="step">
                  <span className="step-title">Étape 6</span>
                  <Etape
                    onClick={() => dispatch(toogleStep6())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape6'))}
                    value={valueEtape6}
                  />
                </div>
              ) : ''}
              {(toogle7) ? (
                <div className="step">
                  <span className="step-title">Étape 7</span>
                  <Etape
                    onClick={() => dispatch(toogleStep7())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape7'))}
                    value={valueEtape7}
                  />
                </div>
              ) : ''}
              {(toogle8) ? (
                <div className="step">
                  <span className="step-title">Étape 8</span>
                  <Etape
                    onClick={() => dispatch(toogleStep8())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape8'))}
                    value={valueEtape8}
                  />
                </div>
              ) : ''}
              {(toogle9) ? (
                <div className="step">
                  <span className="step-title">Étape 9</span>
                  <Etape
                    onClick={() => dispatch(toogleStep9())}
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape9'))}
                    value={valueEtape9}
                  />
                </div>
              ) : '' }

            </div>

            <button type="submit">Envoyer <i className="icon-oven-open" /></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatedRecipe;
