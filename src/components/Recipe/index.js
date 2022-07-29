import './styles.scss';

function Recipe() {
  return (
    <div className="one-recipe">
      <div className="one-recipe-header">
        <h1 className="one-recipe-title">La Recette</h1>
        <i className="icon-cakes" />
        <span>5</span><i className="icon-miam" />
      </div>
      <div className="one-recipe-img">
        <img
          src="http://adrienpinilla-server.eddi.cloud/omiam/current/public/sources/images/recipe/recipe_2.png"
          alt="Name"
          className="one-recipe-img"
        />
      </div>
      <div className="one-recipe-timer">
        <ul className="one-recipe-timer-ul">
          <li><i className="icon-timer" /><span>15 min</span></li>
          <li><i className="icon-kitchen-hat" /></li>
          <li><p className="one-recipe-caption">
            Découvrez la recette du Mojito, la star des cocktails de l'été grâce à
            sa menthe parfumée et son irrésistible fraîcheur.
              </p>
          </li>
        </ul>
        <div className="one-recipe-steps">
          <ul className="one-recipe-steps-ul">
            <li><h2 className="one-recipe-steps-title">Etape 1</h2></li>
            <li><p className="one-recipe-steps-etape">Faites un puits au milieu et versez-y les œufs.</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
