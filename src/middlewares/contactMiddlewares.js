import axios from 'axios';
import { POST_MESSAGE } from '../action/contact';

const axiosInstance = axios.create({
  baseURL: 'https://back-omiam.unetaupechezvous.fr/public/api/contact/',
});
const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_MESSAGE: {
      const state = store.getState();
      const { name, email, topic, message } = state.contact;
      const { token } = localStorage;
      // console.log(contactValue);
      axiosInstance.post(
        'new',
        {
          name: name,
          email: email,
          topic: topic,
          message: message,
        },
        )
        .then((response) => {
          //axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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
