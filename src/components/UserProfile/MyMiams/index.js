import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesMiams } from '../../../action/myAccountRecipes';
import Buttonnavbar from '../Buttonnavbar';
import './styles.scss';

function MyMiams() {
  // const miamsMyAccount = useSelector((state) => state.myAccountRecipes.favorites);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchFavoritesMiams());
    },
    [],
  );
  return (
    <>
      <Buttonnavbar />
      <div className="my-miams">
        <h1 className="my-miams-title">Carnet de Miam's</h1>
        <div className="my-miams-cards">
          <div className="my-miams-card">
            
              <div className="my-miams-card-img">
                <img
                  src=""
                  alt="Name"
                  className="my-miams-img"
                />
                <div className="my-miams-card-block">
                  <ul className="my-miams-card-ul">
                    <div className="my-miams-display">
                      <li><h2 className="my-miams-card-title">Titre</h2></li>
                      <li><i className="icon-dish" /></li>
                      <li><i className="icon-kitchen-hat" /></li>
                      <li>
                        <span>15
                          <i className="icon-miam" />
                        </span>
                      </li>
                    </div>
                    <div className="my-miams-responsive">
                      <div className="my-miams-card-overview">
                        <li><h2 className="my-miams-card-overview-title">Aperçu de la Recette</h2></li>
                        <li><p className="my-miams-card-overview-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis.</p></li>
                      </div>
                      <div className="my-miams-similar">
                        <li><h2>Recettes similaire</h2></li>
                        <ul className="my-miams-list">
                          <li>Titre de la recette</li>
                          <li>Titre de la recette</li>
                          <li>Titre de la recette</li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default MyMiams;
