import { element } from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fileAction, difficultyAction, durationAction, titleAction, typeAction, etapeAction, postCreated, captionAction, toogleSteps, toogleStep9, toogleStep8, toogleStep7, toogleStep6, toogleStep5, toogleStep4, toogleSteps3, toogleSteps2, globalIngredients, ingredientAction, unitAction, quantityAction, fetchAction, toggleCreatedIngredients, toogleCreatedRecipe, } from '../../action/createdRecipe';
import Etape from './Field/etapes';
import Ingredient from './Ingredient';
import Quantity from './Quantity';
import './styles.scss';
import Unit from './Unit';

function CreatedRecipe() {
  const dispatch = useDispatch();

  const valueTitle = useSelector((state) => state.title);
  const valueType = useSelector((state) => state.createdRecipe.category);
  const valueCaption = useSelector((state) => state.createdRecipe.captionAction);
  const valueDifficulty = useSelector((state) => state.createdRecipe.difficulty);
  const valueTime = useSelector((state) => state.createdRecipe.duration);

  const valueEtape = useSelector((state) => state.createdRecipe.steps.etape1);
  const valueEtape2 = useSelector((state) => state.createdRecipe.steps.etape2);
  const valueEtape3 = useSelector((state) => state.createdRecipe.steps.etape3);
  const valueEtape4 = useSelector((state) => state.createdRecipe.steps.etape4);
  const valueEtape5 = useSelector((state) => state.createdRecipe.steps.etape5);
  const valueEtape6 = useSelector((state) => state.createdRecipe.steps.etape6);
  const valueEtape7 = useSelector((state) => state.createdRecipe.steps.etape7);
  const valueEtape8 = useSelector((state) => state.createdRecipe.steps.etape8);
  const valueEtape9 = useSelector((state) => state.createdRecipe.steps.etape9);
  // const toogle = useSelector((state) => state.createdRecipe.toogle);
  const toogle2 = useSelector((state) => state.createdRecipe.toogle2);

  const toogle3 = useSelector((state) => state.createdRecipe.toogle3);
  const toogle4 = useSelector((state) => state.createdRecipe.toogle4);
  const toogle5 = useSelector((state) => state.createdRecipe.toogle5);
  const toogle6 = useSelector((state) => state.createdRecipe.toogle6);
  const toogle7 = useSelector((state) => state.createdRecipe.toogle7);
  const toogle8 = useSelector((state) => state.createdRecipe.toogle8);
  const toogle9 = useSelector((state) => state.createdRecipe.toogle9);
  const toogleCreatedIngredients = useSelector((state) => state.createdRecipe.toogleCreatedIngredients);
  const toogleCreatedIngredients1 = useSelector((state) => state.createdRecipe.toogleCreatedIngredients1);


  const listIngredients = useSelector((state) => state.createdRecipe.listIngredients);
  // const listIngredients = listIngredientsFull.slice(0, 1);

  const handleChangeTitle = ((evt) => {
    dispatch(titleAction(evt.target.value, 'title'));
  });
  const handleChangeType = ((evt) => {
    console.log(evt.target.value);
    dispatch(typeAction(evt.target.value, 'category'));
  });
  const handleChangeDifficulty = ((evt) => {
    dispatch(difficultyAction(evt.target.value, 'difficulty'));
  });
  const handleChangeTime = ((evt) => {
    dispatch(durationAction(evt.target.value, 'duration'));
  });
  const handleChangeFile = ((evt) => {
    // console.log(evt.target.files[0]);
    dispatch(fileAction(evt.target.files[0]));
  });
  const handleSumbit = ((evt) => {
    evt.preventDefault();
    dispatch(postCreated());
    // dispatch(durationAction(evt.target.value, 'duration'));
  });
  useEffect(
    () => {
      dispatch(fetchAction());
    },
    [],
  );
  return (
    <div className="createdRecipe">
      <h1>Créer Une recette</h1>
      <form onSubmit={handleSumbit} action="/path/to/api" method="POST" encytpe="ENCTYPE_HERE">
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
            value={1}
            checked={valueType}
            onChange={handleChangeType}
          />
          <i className="icon-drink" />
          <input
            name="type"
            type="radio"
            value={2}
            checked={valueType === 2}
            onChange={handleChangeType}
          />
          <i className="icon-entrance" />
          <input
            name="type"
            type="radio"
            value="3"
            checked={valueType === '3'}
            onChange={handleChangeType}
            required
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
          /> <i className="icon-kitchen-hat" /> <i className="icon-kitchen-hat " />
          <input
            type="radio"
            value="3"
            checked={valueDifficulty === '3'}
            onChange={handleChangeDifficulty}
          /> <i className="icon-difficulty-1" /> <i className="icon-difficulty-2" /> <i className="icon-diff" />
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
            onChange={handleChangeFile}
            id="fileUpload"
          />
        </div>
        <div>
          <span className="label-title">Ingredient pour 4 personnes.</span>
          <div className="ingredients">
            <div className="ingredient">
              <Ingredient onChange={(evt) => dispatch(ingredientAction(evt.target.value, 'ingredient'))} />
              <Unit onChange={(evt) => dispatch(unitAction(evt.target.value, 'unit'))} />
              <Quantity onChange={(evt) => dispatch(quantityAction(evt.target.value, 'quantity'))} />
            </div>
            {(toogleCreatedIngredients) ? '' : (<span onClick={() => dispatch(toggleCreatedIngredients())}>Ajouter un ingredient</span>)}

            {(toogleCreatedIngredients)
              ? listIngredients.map((item) => (
                <div className="ingredient">
                  <Ingredient onChange={(evt) => dispatch(ingredientAction(evt.target.value, `ingredient${item.id}`))} />
                  <Unit onChange={(evt) => dispatch(unitAction(evt.target.value, `unit${item.id}`))} />
                  <Quantity onChange={(evt) => dispatch(quantityAction(evt.target.value, `quantity${item.id}`))} />
                  {(toogleCreatedIngredients1) ? (<span onClick={() => dispatch(toggleCreatedIngredients())}>Ajouter un ingredient</span>) : ''}
                </div>
              ))
              : ''}

          </div>

        </div>
        <div>
          <span className="label-title">Etapes</span>
          <div className="steps">
            <div className="step-add">
              <div className="step">
                <span className="step-title">Étape 1</span>
                <Etape
                  onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape1'))}
                  value={valueEtape}
                />
                {(toogle2) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleSteps())} />) }
              </div>
              {(toogle2) ? (
                <div className="step">
                  <span className="step-title">Étape 2</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape2'))}
                    value={valueEtape2}
                  />
                  {(toogle3) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleSteps2())} />) }
                </div>
              ) : '' }
              {(toogle3) ? (
                <div className="step">
                  <span className="step-title">Étape 3</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape3'))}
                    value={valueEtape3}
                  />
                  {(toogle4) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleSteps3())} />)}
                </div>
              ) : ''}
              {(toogle4) ? (
                <div className="step">
                  <span className="step-title">Étape 4</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape4'))}
                    value={valueEtape4}
                  />
                  {(toogle5) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep4())} />) }
                </div>
              ) : ''}
              {(toogle5) ? (
                <div className="step">
                  <span className="step-title">Étape 5</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape5'))}
                    value={valueEtape5}
                  />
                  {(toogle6) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep5())} />)}
                </div>
              ) : ''}
              {(toogle6) ? (
                <div className="step">
                  <span className="step-title">Étape 6</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape6'))}
                    value={valueEtape6}
                  />
                  {(toogle7) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep6())} />) }
                </div>
              ) : ''}
              {(toogle7) ? (
                <div className="step">
                  <span className="step-title">Étape 7</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape7'))}
                    value={valueEtape7}
                  />
                  {(toogle8) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep7())} />) }
                </div>
              ) : ''}
              {(toogle8) ? (
                <div className="step">
                  <span className="step-title">Étape 8</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape8'))}
                    value={valueEtape8}
                  />
                  {(toogle9) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep8())} />)}
                </div>
              ) : ''}
              {(toogle9) ? (
                <div className="step">
                  <span className="step-title">Étape 9</span>
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape9'))}
                    value={valueEtape9}
                  />
                  {(toogle8) ? (<i className="icon-add" onClick={() => dispatch(toogleStep9())} />) : '' }
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
