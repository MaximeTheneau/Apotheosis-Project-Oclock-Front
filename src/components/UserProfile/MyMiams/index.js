import HeaderMyAccount from '../HeaderMyCompte';
import data from '../../../data/recipesHome';
import './styles.scss';

function MyMiams() {
  return (
    <>
      <HeaderMyAccount />
      <div className="my-miams">
        <h1 className="my-miams-title">Carnet de Miam's</h1>
        <div className="my-miams-cards">
          <div className="my-miams-card">
            { data.miamsRecipes.map((item) => (
              <div className="my-miams-card-img">
                <img
                  src={item.picture}
                  alt="Name"
                  className="card-img"
                />
                <div className="my-miams-card-block">
                  <ul className="my-miams-card-ul">
                    <li><h2 className="my-miams-card-title">{item.title}</h2></li>
                    <li><i className="icon-dish" /></li>
                    <li><i className="icon-kitchen-hat" /></li>
                    <li>
                      <span>15
                        <i className="icon-miam" />
                      </span>
                    </li>
                    <li><h2>Aperçu de la Recette</h2></li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis.</li>
                    <li><h2>Recettes similaire</h2></li>
                    <ul>
                      <li>Titre de la recette</li>
                      <li>Titre de la recette</li>
                      <li>Titre de la recette</li>
                    </ul>
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

export default MyMiams;
