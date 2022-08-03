import {
  SAVE_RECIPE,
  SAVE_RECIPE_INGREDIENTS,
  SAVE_RECIPE_STEPS,
  SAVE_COMMENTS,
  COMMENT_ACTION,
  ID_SLUG_RECIPE,
} from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
  steps: [],
  comments: [],
  comment: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        list: action.list,
      };
    case SAVE_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredients: action.list,
      };
    case SAVE_RECIPE_STEPS:
      return {
        ...state,
        steps: action.list,
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.list,
      };
    case COMMENT_ACTION:
      return {
        ...state,
        comment: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case ID_SLUG_RECIPE:
      return {
        ...state,
        idSlug: action.idSlug,
      };
    default:
      return state;
  }
};

export default reducer;
