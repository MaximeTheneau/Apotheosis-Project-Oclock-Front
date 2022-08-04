import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoritesMiams } from '../../../action/myAccountRecipes';
import Buttonnavbar from '../Buttonnavbar';
import './styles.scss';

function MyMiams() {
  const dispatch = useDispatch();
  const miamsMyAccount = useSelector((state) => state.myAccountRecipes.miams);
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
            {miamsMyAccount.map((item) => (
              <Link to={`/recette/${item.id}/${item.slug}`}>
                <div className="my-miams-card-img">
                  <img
                    src={item.picture}
                    alt="Name"
                    className="my-miams-img"
                  />
                  <div className="my-miams-card-block">
                    <ul className="my-miams-card-ul">
                      <div className="my-miams-display">
                        <li><h2 className="my-miams-card-title">{item.title}</h2></li>
                        <li><i className={item.category.iconName} /></li>
                        <li><i className="icon-kitchen-hat" />{item.difficulty}</li>
                        <li>
                          <span>{item.nbMiams}
                            <i className="icon-miam" />
                          </span>
                        </li>
                      </div>
                      <div className="my-miams-responsive">
                        <div className="my-miams-card-overview">
                          <li><h2 className="my-miams-card-overview-title">Aperçu de la Recette</h2></li>
                          <li><p className="my-miams-card-overview-text">{item.caption}</p></li>
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

export default MyMiams;
