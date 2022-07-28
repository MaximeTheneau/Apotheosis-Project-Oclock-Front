import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  saveUser,
  redirect,
  authError,
} from '../action/user';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://adrienpinilla-server.eddi.cloud/omiam/current/public/api',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user.settingsLogIn;
      // équivalent : double destructuration
      //const { user: { email, password } } = store.user.getState();

      axiosInstance.post(
        'login',
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          console.log(response);
          // on extrait la propriété data de la reponse
          // que l'on stocke dans une vaiable user
          const { data: user } = response;

          // j'enregistre mon token sur l'instance d'axios
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;

          // On mémorise l'utilisateur dans le state
          store.dispatch(saveUser(user));

          // Redirect of the user towards to home page
          store.dispatch(redirect('/'));

          // - Save the JWT in localStorage
          //window.localStorage.setItem('token', user.token);

          return next(action);
        })
        .catch((error) => {
          console.log(error);

          store.dispatch(authError('Email ou mot de passe incorrect'));

          return next(action);
        });

      return next(action);
    }
    case LOGOUT:
      // on nettoie notre instance axios du token
      axiosInstance.defaults.headers.common.Authorization = null;
      // syntaxe alternative
      // delete axiosInstance.defaults.headers.common.Authorization;

      console.log('nettoyage');

      return next(action);

    default:
      return next(action);
  }
};

export default userMiddleware;
