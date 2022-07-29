import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../../action/oneRecipe';
import Comments from './Comments';
import './styles.scss';

function Recipe() {
  const oneRecipe = useSelector((state) => state.oneRecipe.list);
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
              <div className="one-recipe-steps">
                <ul className="one-recipe-steps-ul">
                  <li><h2 className="one-recipe-steps-title">Etape 1</h2></li>
                  <li><p className="one-recipe-steps-etape">{item.etape1}</p></li>
                </ul>
              </div>
            </div>
          </div>
          <Comments />
        </>
      ))}
    </div>
  );
}

export default Recipe;
