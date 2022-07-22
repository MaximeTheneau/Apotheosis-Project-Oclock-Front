import { SET_SETTINGS_FIELD } from '../action/recipes';

export const initialState = {
  list: [],
  form:{
    search: '',
    addCards: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SETTINGS_FIELD:
      return {
        ...state,
        form: {
          ...state.settings,
          // Cette syntaxe nous permet de définir de manière dynamique
          // le nom de la propriété de l'objet
          // => settings.email OU settings.password
          // ==> email: action.value OU password: action.value
          [action.field]: action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
