import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Data from '../../../data/recipesHome';
import Recipes from '../../../data/recipes';
import SearchForm from '../Search/searchForm';
import Spinner from '../../Spinner';
import { fetchRecipes } from '../../../action/homePage';

function Home() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(fetchRecipes());
    },
    [],
  );
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const toogleValue = useSelector((state) => state.homePage.addCards);
  const toogleSpinner = useSelector((state) => state.homePage.toggleSpinner);
  const miamsRecipes = useSelector((state) => state.homePage.listHome);
  console.log(miamsRecipes);

  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = Recipes.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });
  const recipesSliceEffect = () => recipesFilter.slice(0, 6);
  const recipesSlice = recipesFilter.slice(0, 6);

  useEffect(() => {
    // après chaque rendu du composant on appelle la fonction qui load les posts
    recipesSliceEffect();
  }, []);

  return (
    <>
      {/* Title Page */}
      <Link to="/">
        <h1 className="title-page logo">
          <i className="icon-miam logo" />'miam
          <span className="logo-slogan"> Une histoire de miam's</span>
        </h1>
      </Link>

      <Link to="/Creer/Recette"><p>Creer Recette</p></Link>


      <SearchForm />

      { (toogleSpinner) && <Spinner />}
      { (!toogleSpinner) && (
        <div className="cards-home">
          {/* Cards Search */}
          { toogleValue ? (
            <div className="cards-type">
              <h2 className="cards-recipe">Ma Recherche</h2>
              <div className="cards-list-type">

                {/* Card */}
                { recipesSlice.map((item) => (
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
          ) : '' }

          {/* Cards Miam */}
          <div className="cards">
            <h2 className="cards-recipe">Les Recettes Miam</h2>
            <div className="cards-list">

              {/* Card */}
              { miamsRecipes.map((item) => (
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

          {/* Cards Last */}
          <div className="cards">
            <h2 className="cards-recipe">Les Recettes Miam</h2>
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

          {/* Cards Random */}
          <div className="cards">
            <h2 className="cards-recipe">Les Recettes Miam</h2>
            <div className="cards-list">

              {/* Card */}
              { Data.randomRecipes.map((item) => (
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
      )}

    </>
  );
}

export default Home;
