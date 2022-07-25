import { Link } from 'react-router-dom';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSettingsField, submitValue, valueToogle } from '../../../action/recipes';

function SearchForm() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.recipes.form.search);
  // console.log(recipesFilter);

  const handleChange = (evt) => {
    dispatch(setSettingsField(evt.target.value, 'search'), dispatch(valueToogle()));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitValue());
  };
  return (
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

  );
}

export default SearchForm;
