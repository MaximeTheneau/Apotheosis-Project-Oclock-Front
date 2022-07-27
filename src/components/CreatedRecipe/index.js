import { useDispatch, useSelector } from 'react-redux';
import { difficultyAction, ingredientsAction, titleAction, typeAction } from '../../action/createdRecipe';
import './styles.scss';

function CreatedRecipe() {
  const dispatch = useDispatch();
  const valueTitle = useSelector((state) => state.title);
  // const valueIngredient = useSelector((state) => state.ingredients);
  const valueType = useSelector((state) => state.type);
  const valueDifficulty = useSelector((state) => state.difficulty);


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
          <input type="number" placeholder="1" />
        </div>
        <div>
          <span className="label-title">Image</span>
          <input type="file" value="" />
        </div>
        <div>
          <span className="label-title">Ingredient pour 4 personnes.</span>
          <div className="ingredients">
            <div className="ingredients-add">
              <input type="text" />
              <input type="text" />
              <input className="ingredients-type" type="number" />
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
                rowss="1"
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
