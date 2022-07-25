import './styles.scss';

function CreatedRecipe() {
 
  return (
    <div className="CreatedRecipe">
      <h1>Créer Une recette</h1>
      <form>
        <label>
          Title
          <input type="text" />
        </label>

        <label> 
          Type 
          <input type="radio" value="1" name="Difficulty" /> <i className="icon-kitchen-hat"/>
          <input type="radio" value="2" name="Difficulty" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
          <input type="radio" value="3" name="Difficulty" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
        </label>
        <label> 
          Temps
          <select name="duration" id="duration">
            <option value="">----</option>
            <option value="1">1</option>
          </select>
          </label>
          <label>
            Image
            <input type="file" />
          </label>
          <label>
            Ingredient pour 4 personnes.
            <div className="ingredients">
              <div className="ingredients-add">
                  <select name="ingredients" id="duration">
                    <option value="">----</option>
                    <option value="1">1</option>
                  </select>            
                  <i className="icon-add"/>
                </div>
              </div>
          </label>
          <label>
            Etape 1
            <div className="etape">
              <div className="etape-add">
                <input type="text"/>
                <i className="icon-add"/>
              </div>
            </div>
          </label>          

      </form>
    </div>
     );
}

export default CreatedRecipe;
