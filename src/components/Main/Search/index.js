import { Link } from 'react-router-dom';
import './styles.scss';
import { useSelector } from 'react-redux';
import Recipes from '../../../data/recipes';
import SearchForm from './searchForm';

function Search() {
  const valueSearch = useSelector((state) => state.recipes.form.search);

  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = Recipes.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });

  return (
    <>
      {/* Title Page */}
      <Link to="/"><h1 className="title-page logo">Recherche</h1></Link>

      <Link to="/recettes/recherche"><p>Recherche</p></Link>


      <SearchForm />
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
                  <li><span>15<i className="icon-miam" /></span></li>
                </ul>
              </div>
            </div>
          )) }
        </div>
      </div>
    </>
  );
}

export default Search;
