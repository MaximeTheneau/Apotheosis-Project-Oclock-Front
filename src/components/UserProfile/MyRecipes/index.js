import HeaderMyAccount from '../HeaderMyCompte';
import Data from '../../../data/recipesHome';
import './styles.scss';

function MyRecipes() {
  return (
    <>
      <HeaderMyAccount />
      <div className="my-recipes">
        <h1 className="my-recipes-title">Mes Recettes</h1>

        {/* Cards Last */}
        <div className="cards">
          <div className="cards-list">

            {/* Cardn Last */}
            { Data.lastRecipes.map((item) => (
              <div className="card">
                <h2 className="card-recipe">{item.title}</h2>
                <img
                  src={item.picture}
                  alt="Name"
                  className="card-img"
                />
                <div className="card-container">
                  <ul className="card-container-list">
                    <li><img className="card-container-list-img-user" src="https://image.shutterstock.com/image-photo/carer-pushing-senior-woman-wheelchair-260nw-1148689052.jpg" alt="zz" /></li>
                    <li><i className="icon-dish" /></li>
                    <li>
                      <span>15
                        <i className="icon-miam" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )) }
          </div>
        </div>
      </div>
    </>
  );
}

export default MyRecipes;
