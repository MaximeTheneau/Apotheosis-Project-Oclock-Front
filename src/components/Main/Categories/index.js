import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesFull } from '../../../action/recipes';
import Spinner from '../../Spinner';
import './styles.scss';

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
  const recipesCategory = useSelector((state) => state.homePage.categoryRecipes);

  // console.log(recipe);
  const valueSearchFilterMaj = valueSearch.toLocaleLowerCase();
  const valueSearchFilter = valueSearchFilterMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  const recipesFilter = recipesCategory.filter((item) => {
    const filterNameSearchMaj = item.title.toLocaleLowerCase();
    const filterNameSearch = filterNameSearchMaj.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    return (filterNameSearch.includes(valueSearchFilter));
  });

  return (
    <>
      {/*
      <h1 className="title-page logo">Catégories</h1>
      <SearchForm />
       Title Page */}
      <div className="cards-list-type">
        { recipesFilter.map((item) => (
          <>
            {/* Cards Search */}
            { (!toogleSpinner) && <Spinner />}
            { toogleSpinner && (
            <div>
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
      </div>
    </>
  );
}

export default Categories;
