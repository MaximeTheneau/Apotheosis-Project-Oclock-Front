import { CLOSE_MOBILE_MENU, TOGGLE_MENU } from '../action/header';

export const initialState = {
  header: {
    isOpen: false,
  },
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
        header: {
          ...state.header,
          isOpen: !state.header.isOpen,
        },
      };
    case CLOSE_MOBILE_MENU:
      return {
        ...state,
        header: {
          ...state.header,
          isOpen: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
