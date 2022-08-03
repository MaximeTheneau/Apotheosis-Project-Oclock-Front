import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchRecipe, idSlugRecipe, setIsMiam, submitUsersIdMiams, SUBMIT_USERS_ID_MIAMS } from '../../action/oneRecipe';
import Comments from './Comments';
import './styles.scss';

function Recipe() {
  const dispatch = useDispatch();

  const { id } = useParams();

  dispatch(idSlugRecipe(id));
  // const userIdConnected = useSelector((state) => state.user.settingsLogIn.userid);
  const usersIdMiamed = useSelector((state) => state.oneRecipe.usersId);
  // console.log(usersIdMiamed);
  const oneRecipe = useSelector((state) => state.oneRecipe.list);
  const ingredients = useSelector((state) => state.oneRecipe.ingredients);
  const listSteps = useSelector((state) => state.oneRecipe.steps);
  const userIdConnected = useSelector((state) => state.user.settingsLogIn.userid);
  useEffect(
    () => {
      dispatch(fetchRecipe());
    },
    [],
  );
  // console.log(usersIdMiamed);
  const handleSubmit = (evt) => {
    
    // const isMiam = usersIdMiamed.includes(userIdConnected);
    dispatch(submitUsersIdMiams(evt));
    // evt.preventDefault();
  };
  return (
    <div className="one-recipe">
      {oneRecipe.map((item) => (
        <>
          <div>
            <div className="one-recipe-header">
              <h1 className="one-recipe-title">{item.title}</h1>
              <form onSubmit={handleSubmit}>
                <p>{item.nbMiams}</p>
                <button type="submit" className={item.category.iconName} />
              </form>
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
                    <li className="ingredient" key={element.id}>{element.quantity} {element.unit} {element.ingredient.name}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="one-recipe-steps">
              <ul className="one-recipe-steps-ul">
                {console.log(listSteps)}
                {Object.keys(listSteps[0]).map((nom, numberInt) => console.log('nom =>', nom, 'number =>', numberInt))}
                {Object.keys(listSteps[0]).map((nom, numberInt) => (
                  <li>
                    <h2 className="one-recipe-steps-title">Etape {numberInt + 1}</h2>
                    <p className="one-recipe-steps-etape">{listSteps[0][nom]}</p>
                  </li>
                ))}
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
