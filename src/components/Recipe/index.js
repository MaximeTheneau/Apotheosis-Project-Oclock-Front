import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipe } from '../../action/oneRecipe';
import Comments from './Comments';
import './styles.scss';

function Recipe() {
  //! Warning !!! Look reducers list is not Array!!!
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
      <div className="one-recipe-header">
        <h1 className="one-recipe-title">La Recette</h1>
        <i className="icon-cakes" />
        <span>5</span><i className="icon-miam" />
      </div>
      <div className="one-recipe-img">
        <img
          src=""
          alt="Name"
          className="one-recipe-img"
        />
      </div>
      <div className="one-recipe-timer">
        <ul className="one-recipe-timer-ul">
          <li><i className="icon-timer" /><span>15 min</span></li>
          <li><i className="icon-kitchen-hat" /></li>
          <li><p className="one-recipe-caption">
            Découvrez la recette du Mojito, la star des cocktails de l'été grâce à
            sa menthe parfumée et son irrésistible fraîcheur.
          </p>
          </li>
        </ul>
        <div className="one-recipe-steps">
          <ul className="one-recipe-steps-ul">
            <li><h2 className="one-recipe-steps-title">Etape 1</h2></li>
            <li><p className="one-recipe-steps-etape">Faites un puits au milieu et versez-y les œufs.</p></li>
          </ul>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default Recipe;

