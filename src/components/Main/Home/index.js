import './styles.scss';

function Home() {
  return (
    <div className="home">
      <form>
        <input type="text" />
        <button type="submit">Rechercher </button>
      </form>
      <ul className="home-list-categories">
        <li><i className="icon-radish" /></li>
        <li><i className="icon-dish" /></li>
      </ul>

      <h2 className="home-recipe">Les Recettes Miam</h2>

      <div className="home-cards">

        <div className="home-card">
          <img
            src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Name"
            className="home-card-img"
          />
          <ul className="home-card-icon">
            <li><i className="icon-radish" /></li>
            <li><i className="icon-dish" /></li>
          </ul>
        </div>

        <div className="home-card">
          <img
            src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Name2"
            className="home-card-img"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
