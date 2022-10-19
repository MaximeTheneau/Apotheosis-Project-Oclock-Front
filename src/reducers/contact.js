import {
  PSEUDO_ACTION,
  EMAIL_ACTION,
  TOPIC_ACTION,
  MESSAGE_ACTION,
} from '../action/contact';

export const initialState = {
  name: null,
  email: null,
  topic: null,
  message: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PSEUDO_ACTION:
      return {
        ...state,
        name: action.name,
      };
    case EMAIL_ACTION:
      return {
        ...state,
        email: action.email,
      };
    case TOPIC_ACTION:
      return {
        ...state,
        topic: action.topic,
      };
    case MESSAGE_ACTION:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
