import { Link } from 'react-router-dom';
import './styles.scss';
import Data from '../../../data/recipesHome';
import Recipes from '../../../data/recipes';

function Home() {
  // Recipes.map((item) => console.log(item));
  return (
    <>
      {/* Title Page */}
      <h1 className="title-page logo"><i className="icon-miam logo" />'miam
        <span className="logo-slogan"> Une histoire de miam's</span>
      </h1>
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
            { Recipes.map((item) => (
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
