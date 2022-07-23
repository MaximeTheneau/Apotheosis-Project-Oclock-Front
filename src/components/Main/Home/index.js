import { Link } from 'react-router-dom';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Data from '../../../data/recipesHome';
import Recipes from '../../../data/recipes';
import { setSettingsField, submitValue, valueToogle } from '../../../action/recipes';

function Home() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.recipes.form.search);

  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = Recipes.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });
  // console.log(recipesFilter);

  const handleChange = (evt) => {
    dispatch(setSettingsField(evt.target.value, 'search'), dispatch(valueToogle()));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitValue());
  };
  return (
    <>
      {/* Title Page */}
      <h1 className="title-page logo"><i className="icon-miam logo" />'miam
        <span className="logo-slogan"> Une histoire de miam's</span>
      </h1>
      <Link to="/recettes/recherche"><p>recherche</p></Link>
      {/* Search */}
      <div className="search">
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <input
              value={valueSearch}
              onChange={handleChange}
              type="text"
              className="field-input"
              placeholder="Rechercher"
            />
            <Link to="/recettes/recherche">
              <button className="search-button" type="submit">
                <i className="icon-search" />
              </button>
            </Link>
          </form>
        </div>
        {/* List Catégories */}
        <div className="list">
          <ul className="list-categories">
            <li className="list-categories-icon"><Link to="/e"><i className="icon-drink" /></Link></li>
            <li className="list-categories-icon"><i className="icon-radish" /></li>
            <li className="list-categories-icon"><i className="icon-dish" /></li>
            <li className="list-categories-icon"><i className="icon-cakes" /></li>
          </ul>
        </div>
      </div>

      <div className="cards-home">

        {/* Cards Search */}
        <div className="cards-type">
          <h2 className="cards-recipe">Ma Recherche</h2>
          <div className="cards-list-type">

            {/* Card */}
            { recipesFilter.map((item) => (
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

        {/* Cards Miam */}
        <div className="cards">
          <h2 className="cards-recipe">Les Recettes Miam</h2>
          <div className="cards-list">

            {/* Card */}
            { Data.miamsRecipes.map((item) => (
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
    </>
  );
}

export default Home;
