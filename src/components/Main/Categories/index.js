import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesFull } from '../../../action/recipes';
import Spinner from '../../Spinner';
import SearchForm from '../Search/searchForm';
import './styles.scss';
import { fetchRecipesCategory, saveCategoryId } from '../../../action/homePage';

function Categories() {
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
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const recipesFullApi = useSelector((state) => state.recipes.list);
  // console.log(recipe);
  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = recipesFullApi.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });

  const { id } = useParams();
  dispatch(saveCategoryId(id));
  // const { categoryId } = useSelector((state) => state.homePage);

  return (
    <>
      <h1 className="title-page logo">Catégories</h1>
      <SearchForm />
      {/* Title Page */}
      { recipesFilter.map((item) => (
        <>
          {/* Cards Search */}
          { (!toogleSpinner) && <Spinner />}
          { toogleSpinner && (
          <div className="cards-list-type">
            {/* Card */}
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
          </div>
          )}
        </>
      ))}
    </>
  );
}

export default Categories;
