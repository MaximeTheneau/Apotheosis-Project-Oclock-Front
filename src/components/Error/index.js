import './styles.scss';

function Recipe() {
  return (
    <>
      <div class="animation">
        <i class=" icon-stainer"></i>
        <i class="icon-rolls"></i>
        <i class="icon-ladle"></i>
        <i class="icon-whisk"></i>
        <i class="icon-glass"></i>
        <i class="icon-bottle"></i>
        <i class="icon-fork"></i>
        <i class="icon-teapot"></i>
        <i class="icon-glove"></i>
        <i class="icon-chicken"></i>
        <i class="icon-pan"></i>
        <i class="icon-spatula"></i>
    </div>
        <div className="one-recipe">
          <div className="one-recipe-header">
            <h1 className="one-recipe-title">404</h1>
          </div>
          <div className="one-recipe-img-404">
            <i className="icon-coffee-maker fs-2" />
          </div>
          <div className="one-recipe-timer">
            <ul className="one-recipe-timer-ul">
              <li><i className="icon-timer" /><span>5 min</span></li>
              <li><i className="icon-kitchen-hat" /></li>
              <li><p className="one-recipe-caption"></p></li>
            </ul>
          </div>
          <div className="one-recipe-ingredient">
          <h2 className="one-recipe-ingredient-title">Ingrédients</h2>
            <ul className="one-recipe-ingredient-list">
              <li></li>
              <li ></li>
            </ul>
          </div>
          <div className="one-recipe-steps">
            <ul className="one-recipe-steps-ul">
                <li>
                  <h2 className="one-recipe-steps-title">Etape 1</h2>
                  <p className="one-recipe-steps-etape">1l de connexion</p>
                </li>
            </ul>
          </div>
        </div>
    </>

  );
}

export default Recipe;
