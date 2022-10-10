import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  saveUser,
  authError,
  REGISTER,
  resetRegistrationForm,
  toggleBackoffice,
  resetLoginCredentials,
} from '../action/user';

const axiosInstance = axios.create({
  baseURL: 'https://back-omiam.unetaupechezvous.fr/public/api/',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user.settingsLogIn;

      axiosInstance.post(
        'login',
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          const { data: user } = response;

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${document.cookie}`;

          store.dispatch(saveUser(user));
          localStorage.setItem('token', user.token);
          localStorage.setItem('userid', user.userid);
          localStorage.setItem('avatar', user.avatar);
          localStorage.setItem('role', user.role);
          localStorage.setItem('logs', true);
          localStorage.setItem('pseudo', user.pseudo);

          if (user.role === 'ROLE_ADMIN' || user.role === 'ROLE_MANAGER') {
            store.dispatch(toggleBackoffice());
          }

          // Redirect of the user towards to home page
          //store.dispatch(redirect('/'));
          window.location = '/';

          return next(action);
        })
        .catch((error) => {
          console.log(error);

          store.dispatch(authError('Email ou mot de passe incorrect'));
          store.dispatch(resetLoginCredentials());

          return next(action);
        });

      return next(action);
    }
    case LOGOUT:
      // on nettoie notre instance axios du token
      axiosInstance.defaults.headers.common.Authorization = null;
      localStorage.removeItem('token');
      localStorage.removeItem('logs');
      localStorage.removeItem('avatar');
      localStorage.removeItem('role');
      localStorage.removeItem('userid');
      localStorage.removeItem('pseudo');

      return next(action);
    case REGISTER: {
      const state = store.getState();
      const {
        email, password, pseudo,
      } = state.user.settingsRegister;

      const formData = new FormData();
      formData.append('json', JSON.stringify({
        email: email,
        pseudo: pseudo,
        password: password,
      }));

      formData.append('picture', document.getElementById('fileUploadUser').files[0]);
      axios({
        method: 'post',
        url: 'https://back-omiam.unetaupechezvous.fr/public/api/users',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log(response);

          // Redirect of the user towards to home page
          store.dispatch(resetRegistrationForm());

          return next(action);
        })
        .catch((error) => {
          console.log(error);

          //store.dispatch(authError('Email ou mot de passe incorrect'));

          return next(action);
        });

      return next(action);
    }

    default:
      return next(action);
  }
};

export default userMiddleware;
