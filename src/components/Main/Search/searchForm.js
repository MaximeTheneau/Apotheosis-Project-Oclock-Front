import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  setSettingsField, submitValue, valueToogle, saveCategoryId, fetchRecipesCategory, 
  changeCategoryTitle,
} from '../../../action/homePage';

function SearchForm() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.homePage.form.search);
  const handleChange = (evt) => {
    dispatch(setSettingsField(evt.target.value, 'search'));
  };

  const handleFocus = (evt) => {
    console.log(evt.bubbles);
    dispatch(valueToogle(evt.bubbles));
  };
  const handleBlur = (evt) => {
    dispatch(valueToogle(evt.cancelable));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitValue());
  };

  const { id, slug } = useParams();
  if (slug === 'entree') {
    dispatch(changeCategoryTitle('Entrée'));
  }
  if (slug === 'apero') {
    dispatch(changeCategoryTitle('Apéro'));
  }
  if (slug === 'plat') {
    dispatch(changeCategoryTitle('Plat'));
  }
  if (slug === 'dessert') {
    dispatch(changeCategoryTitle('Dessert'));
  }

  dispatch(saveCategoryId(id));
  console.log(id);
  useEffect(() => {
    dispatch(fetchRecipesCategory(id));
  }, [id]);
  const categoryTitle = useSelector((state) => state.homePage.categoryTitle);
  console.log(categoryTitle);

  return (
    <>
      <h1>{categoryTitle}</h1>
      <div className="search">
        <div className="search-form">
          <form onSubmit={handleSubmit}>
            <input
              value={valueSearch}
              onClick={handleFocus}
              // onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              className="search-field-input"
              placeholder="Rechercher"
            />
            <Link to="/recherche">
              <button className="search-button" type="submit">
                <i className="icon-search" />
              </button>
            </Link>
          </form>
        </div>
        {/* List Catégories */}
        <div className="list">
          <ul className="list-categories">
            <Link
              to="/recettes/1/apero/search"
            >
              <li className="list-categories-icon"><i className="icon-drink" /></li>
            </Link>
            <Link
              to="/recettes/2/entree/search"
            >
              <li className="list-categories-icon"><i className="icon-radish" /></li>
            </Link>
            <Link
              to="/recettes/3/plat/search"
            >
              <li className="list-categories-icon"><i className="icon-dish" /></li>
            </Link>
            <Link
              to="/recettes/4/dessert/search"
            >
              <li className="list-categories-icon"><i className="icon-cakes" /></li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
