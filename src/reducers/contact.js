import { } from '../action/contact';

export const initialState = {
  message: [],
  setting: {
    pseudo: "",
    email: "",
    topic: "",
    message: "",
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case :
      return {
        ...state,
        
      };

    case :
      return {
        ...state,
        
      };

    default:
      return state;
  }
};

export default reducer;
