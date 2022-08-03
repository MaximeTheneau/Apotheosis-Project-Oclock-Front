import {
  SAVE_RECIPES_LAST,
  SAVE_RECIPES_MIAMS,
  SAVE_RECIPES_RANDOM,
  SET_SETTINGS_FIELD,
  TOGGLE_SPINNER,
  VALUE_TOOGLE,
  SAVE_CATEGORY_ID,
  FETCH_RECIPES_CATEGORY,
  SAVE_RECIPES_CATEGORY,
} from '../action/homePage';

export const initialState = {
  listHomeLast: [],
  listHomeMiams: [],
  listHomeRandom: [],
  recipes: [],
  form: {
    search: '',
  },
  addCards: true,
  toggleSpinner: true,
  categoryId: null,
  categoryRecipes: [],
  idSlug: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES_LAST:
      return {
        ...state,
        listHomeLast: action.list,
      };
    case SAVE_RECIPES_MIAMS:
      return {
        ...state,
        listHomeMiams: action.list,
      };

    case SAVE_RECIPES_RANDOM:
      return {
        ...state,
        listHomeRandom: action.list,
      };
    case SET_SETTINGS_FIELD:
      return {
        ...state,
        form: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case VALUE_TOOGLE:
      return {
        ...state,
        addCards: !state.addCards,
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        toggleSpinner: !state.toggleSpinner,
      };
    case SAVE_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.value,
      };
    case SAVE_RECIPES_CATEGORY:
      return {
        ...state,
        categoryRecipes: action.recipes,
      };

    default:
      return state;
  }
};

export default reducer;
