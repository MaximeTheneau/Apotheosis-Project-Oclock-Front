import './styles.scss';

function CreatedRecipe() {
 
  return (
    <div className="createdRecipe">
      <h1>Créer Une recette</h1>
      <form>
        <label>
          <span className="label-title">Title</span>
          <input type="text" />
        </label>

        <label> 
          <span className="label-title">Type</span>
          <input type="radio" value="1" name="Difficulty" /> <i className="icon-kitchen-hat"/>
          <input type="radio" value="2" name="Difficulty" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
          <input type="radio" value="3" name="Difficulty" /> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/> <i className="icon-kitchen-hat"/>
        </label>
        <label> 
        <span className="label-title">Temps</span>
          <select name="duration" id="duration">
            <option value="">----</option>
            <option value="1">1</option>
          </select>
          </label>
          <label>
          <span className="label-title">Image</span>
            <input type="file" />
          </label>
          <label>
          <span className="label-title">Ingredient pour 4 personnes.</span>
            <div className="ingredients">
              <div className="ingredients-add">
                  <select name="ingredients" className="ingredients-type" id="duration">
                    <option value="">----</option>
                    <option value="1">1</option>
                  </select> 
                  <select name="unit" className="ingredients-type" id="duration">
                    <option value="">----</option>
                    <option value="cl">cl</option>
                  </select>
                  <input className="ingredients-type" type="text" />             
                  <i className="icon-add"/>
                </div>
              </div>
          </label>
          <label>
          <span className="label-title">Etape 1</span>
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
