import HeaderMyAccount from '../HeaderMyCompte';
import data from '../../../middlewares/myAccountRecipes';
import './styles.scss';

function MyRecipes() {
  return (
    <>
      <HeaderMyAccount />
      <div className="my-recipes">
        <h1 className="my-recipes-title">Mes Recettes</h1>
        <div className="my-recipes-cards">
          <div className="my-recipes-card">
            { data.map((item) => (
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
                      <li><i className="icon-dish" /></li>
                      <li><i className="icon-kitchen-hat" /></li>
                      <li>
                        <span>15
                          <i className="icon-miam" />
                        </span>
                      </li>
                    </div>
                    <div className="my-recipes-responsive">
                      <div className="my-recipes-card-overview">
                        <li><h2 className="my-recipes-card-overview-title">Aperçu de la Recette</h2></li>
                        <li><p className="my-recipes-card-overview-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis.</p></li>
                      </div>
                      <div className="my-recipes-similar">
                        <li><h2>Recettes similaire</h2></li>
                        <ul className="my-recipes-list">
                          <li>Titre de la recette</li>
                          <li>Titre de la recette</li>
                          <li>Titre de la recette</li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyRecipes;
