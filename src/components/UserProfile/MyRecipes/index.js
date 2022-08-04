import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesMyAccount } from '../../../action/myAccountRecipes';
import { fetchRecipes } from '../../../action/homePage';
import Buttonnavbar from '../Buttonnavbar';

import './styles.scss';

function MyRecipes() {
  const dispatch = useDispatch();
  const recipesMyAccount = useSelector((state) => state.myAccountRecipes.list);
  useEffect(
    () => {
      dispatch(fetchRecipesMyAccount());
      dispatch(fetchRecipes());
    },
    [],
  );
  return (
    <>
      <Buttonnavbar />
      <div className="my-recipes">
        <h1 className="my-recipes-title">Mes Recettes</h1>
        <div className="my-recipes-cards">
          <div className="my-recipes-card">
            {recipesMyAccount.map((item) => (
              <Link to={`/recette/${item.id}/${item.slug}`}>
                <div className="my-recipes-card-img">
                  <img
                    src={item.picture}
                    alt="Name"
                    className="my-recipes-img"
                  />
                  <div className="my-recipes-card-block">
                    <ul className="my-recipes-card-ul">
                      <div className="my-recipes-display">
                        <li><h2 className="my-recipes-card-title">{item.title}</h2></li>
                        <li><i className={item.category.iconName} /></li>
                        <li><i className="icon-kitchen-hat" />{item.difficulty}</li>
                        <li>
                          <span>{item.nbMiams}
                            <i className="icon-miam" />
                          </span>
                        </li>
                      </div>
                      <div className="my-recipes-responsive">
                        <div className="my-recipes-card-overview">
                          <li><h2 className="my-recipes-card-overview-title">Aperçu de la Recette</h2></li>
                          <li><p className="my-recipes-card-overview-text">{item.caption}</p></li>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyRecipes;
