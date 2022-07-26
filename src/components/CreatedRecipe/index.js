import { useDispatch, useSelector } from 'react-redux';
import { ingredientsAction, titleAction } from '../../action/createdRecipe';
import './styles.scss';

function CreatedRecipe() {
  const dispatch = useDispatch();
  const valueTitle = useSelector((state) => state.title);
  const valueIngredient = useSelector((state) => state.ingredients);


  // console.log(valueTitle);

  const handleChange = ((evt) => {
    // console.log(evt.target.value);
    dispatch(dispatch(titleAction(evt.target.value), 'title'), dispatch(ingredientsAction(evt.target.value), 'ingredients'));
  });


  return (
    <div className="createdRecipe">
      <h1>Créer Une recette</h1>
      <form >
        <div>
          <span className="label-title">Title</span>
          <input type="text" onChange={handleChange} value={valueTitle} />
        </div>
        <div>
          <span className="label-title">Type</span>
          <input type="radio" value="1" name="Difficulty" /> <i className="icon-kitchen-hat"/>
          <input type="radio" value="2" name="Difficulty" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
          <input type="radio" value="3" name="Difficulty" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
        </div>
        <div>
          <span className="label-title">Temps</span>
          <select name="duration" id="duration">
            <option value="">----</option>
            <option value="1">1</option>
          </select>
        </div>
        <div>
          <span className="label-title">Image</span>
          <input type="file" />
        </div>
        <div>
          <span className="label-title">Ingredient pour 4 personnes.</span>
          <div className="ingredients">
            <div className="ingredients-add">
              <input type="text" onChange={handleChange} value={valueIngredient}/>

              <select name="unit" className="ingredients-type" id="duration">
                <option value="">----</option>
                <option value="cl">cl</option>
              </select>
              <input className="ingredients-type" type="text" />
              <i className="icon-add"/>
            </div>
          </div>
        </div>
        <div>
          <span className="label-title">Etape 1</span>
          <div className="etape">
            <div className="etape-add">
              <button type="submit">eeee</button>
              <input type="text"/>
              <i className="icon-add" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatedRecipe;
