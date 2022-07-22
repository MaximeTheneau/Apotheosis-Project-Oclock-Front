import { TOGGLE_MENU } from '../action/header';

export const initialState = {
  isOpen: false,
  menuItems: [
    'Les recettes Miam',
    'Les dernières recettes',
    'Chefs à la Une',
    'Recettes aléatoires',
    'Se connecter',
    'Créer un compte',
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default reducer;
