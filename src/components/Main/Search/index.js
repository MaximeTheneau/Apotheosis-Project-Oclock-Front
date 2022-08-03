import { Link, useParams } from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipes from '../../../data/recipes';
import { findRecipe } from 'src/selectors/recipes';
import SearchForm from './searchForm';
import Spinner from '../../Spinner';
import { fetchRecipesFull } from '../../../action/recipes';

function Search() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      // On veut recup la liste des recette depuis l'API
      // Pour ça, on va dispatcher une action (émettre l'intention de charger les recettes)
      dispatch(fetchRecipesFull());
    },
    [],
  );
   const toogleSpinner = useSelector((state) => state.homePage.toggleSpinner);
  // const valueSearch = useSelector((state) => state.homePage.form.search);
  const recipesFullApi = useSelector((state) => state.recipes.list);

    // usParams nous renvoie un objet contenuant les params d'URL
    // On utilise le destructuring pour extraire le param slug

  // console.log(recipe);
  // const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  // const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  // const recipesFilter = Recipes.filter((item) => {
//    const filterNameSearchMaj = item.title.toLocaleLowerCase();
 /// return (filterNameSearch.includes(valueSearchFilter));
  //});

  return (
    <>
      {/* Title Page */}
      <Link to="/"><h1 className="title-page logo">Recherche</h1></Link>
      <Link to="/recettes/recherche"><p>Recherche</p></Link>
      <SearchForm />
      {/* Cards Search */}
      <div className="cards-type">
        <h2 className="cards-recipe">Ma Recherche</h2>
        { (toogleSpinner) && <Spinner />}
        { (toogleSpinner) && (
          <div className="cards-list-type">
            {/* Card */}
            { recipesFullApi.map((item) => (
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
                    <li><span>15<i className="icon-miam" /></span></li>
                  </ul>
                </div>
              </div>
  </Link>
              

            )) }
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
