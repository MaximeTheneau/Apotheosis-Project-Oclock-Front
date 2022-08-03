import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { findRecipe } from 'src/selectors/recipes';
import { fetchRecipes } from '../../action/homePage';
import { fetchRecipe, submitUsersIdMiams } from '../../action/oneRecipe';
import './styles.scss';

function Recipe() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const recipe = useSelector((state) => findRecipe(state.oneRecipe.list, slug));
  const recipeIngredients = useSelector((state) => (state.oneRecipe.ingredients));
  const recipeStep = useSelector((state) => state.oneRecipe.steps);
  const ingredients = useSelector((state) => state.oneRecipe);
  const listSteps = useSelector((state) => state.oneRecipe.steps);
  const usersIdMiamed = useSelector((state) => state.oneRecipe.usersId);
  const userIdConnected = useSelector((state) => state.user.settingsLogIn.userid);
  console.log(slug);
  //if (recipe1) {
    //return <Navigate to="/error" replace />;
    // }
    //  console.log(slug);
  useEffect(
      () => {
        dispatch(fetchRecipes());
        dispatch(fetchRecipe());
      },
      [],
   );
      console.log(recipe);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  
    dispatch(submitUsersIdMiams(usersIdMiamed.includes(userIdConnected)));
  };
  return (

              <div className="one-recipe-header">

                <form onSubmit={handleSubmit}>
                <button type="submit" className="icon-miam" />
                  </form>
              </div>
    );
  }

export default Recipe;
