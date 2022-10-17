import axios from 'axios';
import { POST_MESSAGE } from '../action/contact';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_MESSAGE: {
      const state = store.getState();
      const { pseudo, email, topic, message } = state.contact;
      const { token } = localStorage;
      console.log(pseudo, email, topic, message);
      const headers = { Authorization: `Bearer ${token}` };

      axios.post(
        'http://localhost:8000/back/contact/new',
        { name: pseudo, email: email, topic: topic, message: message 
},
        { headers },
      )
        .then((response) => {
          // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          console.log(response);
          return next(action);
        })
        .catch((error) => {
          console.log(error);

          return next(action);
        });

      return next(action);
    }
    default:
      return next(action);
  }
};

export default contactMiddleware;
