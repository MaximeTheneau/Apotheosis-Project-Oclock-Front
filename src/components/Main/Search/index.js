import { Link } from 'react-router-dom';
import './styles.scss';
import recipes from '../../../data/recipes';

function Search() {
  return (
    <>

      {/* Title Page */}
      <Link to="/">
        <h1 className="title-page logo">Rechercher</h1>
      </Link>
      {/* Search */}
      <div className="search">
        <div className="search-form">
          <form>
            <input className="search-input" type="text" placeholder="Rechercher" />
            <button className="search-button" type="submit">
              <i className="icon-search" />
            </button>
          </form>
        </div>
        {/* List Catégories */}
        <div className="list">
          <ul className="list-categories">
            <li className="list-categories-icon"><i className="icon-drink" /><Link to="/e" /></li>
            <li className="list-categories-icon"><i className="icon-radish" /></li>
            <li className="list-categories-icon"><i className="icon-dish" /></li>
            <li className="list-categories-icon"><i className="icon-cakes" /></li>
          </ul>
        </div>
      </div>
      {/* Cards Search */}
      <div className="cards-type">
        <h2 className="cards-recipe">Ma Recherche</h2>
        <div className="cards-list-type">
          {/* Card */}
          { recipes.map((item) => (
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

    </>
  );
}

export default Search;
