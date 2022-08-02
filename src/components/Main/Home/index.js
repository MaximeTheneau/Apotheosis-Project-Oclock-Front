import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../../action/homePage';

import recipes from '../../../data/recipes';
import SearchForm from '../Search/searchForm';
import Spinner from '../../Spinner';
import './styles.scss';

function Home() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const toogleValue = useSelector((state) => state.homePage.addCards);

  const lastRecipes = useSelector((state) => state.homePage.listHomeLast);
  const miamsRecipes = useSelector((state) => state.homePage.listHomeMiams);
  const randomRecipes = useSelector((state) => state.homePage.listHomeRandom);

  useEffect(
    () => {
      dispatch(fetchRecipes());
    },
    [],
  );
  // const tab = miamsRecipes.map((item) => console.log(item[*].id));

  const toogleSpinner = useSelector((state) => state.homePage.toggleSpinner);
  // console.log(toogleSpinner);

  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = recipes.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });
  // const recipesSliceEffect = () => recipesFilter.slice(0, 6);
  const recipesSlice = recipesFilter.slice(0, 6);

  return (
    <>
      {/* Title Page */}
      <h1 className="title-page logo">
        <i className="icon-miam logo" />'miam
        <span className="logo-slogan"> Une histoire de miam's</span>
      </h1>

      <SearchForm />

      { !toogleSpinner && <Spinner />}
      <div className="cards-home">
        {/* Cards Search */}
        { toogleValue ? (
          <div className="cards-type">
            <h2 className="cards-recipe">Ma Recherche</h2>
            <div className="cards-list-type">
              {/* Card */}
              { recipesSlice.map((item) => (
                <Link to={`/recette/${item.slug}`}>
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
                </Link>
              )) }
            </div>
          </div>
        ) : '' }

        {/* Cards Miam */}
        <div className="cards">
          <h2 className="cards-recipe">Dernières Miam's</h2>
          <div className="cards-list">

            {/* Card */}
            { miamsRecipes.map((item) => (
              <Link to={`/recette/${item.slug}`}>
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
              </Link>
            )) }
          </div>
        </div>
        {/* Cardn Last */}
        <div className="cards">
          <h2 className="cards-recipe">Les dernières recettes </h2>
          <div className="cards-list">

            {/* Card  */}
            { lastRecipes.map((item) => (
              <Link to={`/recette/${item.slug}`}>
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
              </Link>
            )) }
          </div>
        </div>
        {/* Cards Random */}
        <div className="cards">
          <h2 className="cards-recipe">Les Recettes aux hasard</h2>
          <div className="cards-list">

            {/* Card  */}
            { randomRecipes.map((item) => (
              <Link to={`/recette/${item.slug}`}>
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
              </Link>
            )) }
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
