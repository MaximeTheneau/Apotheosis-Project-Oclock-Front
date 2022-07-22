import { CHANGE_FIELD_VALUE } from '../action/recipes';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        // on met à jour la propriété dont le nom est contenu
        // dans action.name avec la valeur contenue dans action.value
        //
        // La notation crochet sur un objet permet d'indiquer que l'on accède
        // dynamiquement (on ne sait où qu'à l'exécution) à une de ses propriétés.
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
