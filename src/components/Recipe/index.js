import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../../action/oneRecipe';
import Comments from './Comments';
import './styles.scss';

function Recipe() {
  const oneRecipe = useSelector((state) => state.oneRecipe.list);
  const ingredients = useSelector((state) => state.oneRecipe.ingredients);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchRecipe());
    },
    [],
  );
  return (
    <div className="one-recipe">
      {oneRecipe.map((item) => (
        <>
          <div>
            <div className="one-recipe-header">
              <h1 className="one-recipe-title">{item.title}</h1>
              <i className={item.category.iconName} />
              <span>{item.nbMiams}</span><i className="icon-miam" />
            </div>
            <div className="one-recipe-img">
              <img
                src={item.picture}
                alt={item.title}
                className="one-recipe-img"
              />
            </div>
            <div className="one-recipe-timer">
              <ul className="one-recipe-timer-ul">
                <li><i className="icon-timer" /><span>{item.duration} min</span></li>
                <li><i className="icon-kitchen-hat" />{item.difficulty}</li>
                <li><p className="one-recipe-caption">{item.caption}</p>
                </li>
              </ul>
            </div>
            <div className="one-recipe-ingredient">
              <ul className="one-recipe-ingredient-list">
                <li><h2 className="one-recipe-ingredient-title">Ingrédients</h2></li>
                {ingredients.map((element) => (
                  <div>
                    <li className="ingredient">{element.quantity} {element.unit} {element.ingredient.name}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="one-recipe-steps">
              <ul className="one-recipe-steps-ul">
                <li><h2 className="one-recipe-steps-title">Etape 1</h2></li>
                <li><p className="one-recipe-steps-etape">{item.steps.etape1}</p></li>
                <li><p className="one-recipe-steps-etape">{item.steps.etape2}</p></li>
                <li><p className="one-recipe-steps-etape">{item.steps.etape3}</p></li>
                <li><p className="one-recipe-steps-etape">{item.steps.etape4}</p></li>
                <li><p className="one-recipe-steps-etape">{item.steps.etape5}</p></li>
                <li><p className="one-recipe-steps-etape">{item.steps.etape6}</p></li>
                <li><p className="one-recipe-steps-etape">{item.steps.etape7}</p></li>
              </ul>
            </div>
          </div>
          <Comments />
        </>
      ))}
    </div>
  );
}

export default Recipe;
