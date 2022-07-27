import axios from 'axios';
import {
  FETCH_FAVORITES,
  LOGIN,
  LOGOUT,
  saveUser,
  saveFavorites,
  fetchFavorites,
} from '../action/user';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'http://adrienpinilla-server.eddi.cloud/omiam/current/public',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // const state = store.getState();
      // const { email, password } = state.user;
      // équivalent : double destructuration
      const { user: { email, password } } = store.settingsLogin.getState();

      axiosInstance.post(
        'login',
        {
          email: email,
          password: password,
        },
      )
        .then((response) => {
          // console.log(response);
          // on extrait la propriété data de la reponse
          // que l'on stocke dans une vaiable user
          const { data: user } = response;

          // j'enregistre mon token sur l'instance d'axios
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;

          // On mémorise l'utilisateur dans le state
          store.dispatch(saveUser(user));

          // on mémorise ses favoris aussi
          store.dispatch(fetchFavorites());

          return next(action);
        })
        .catch((error) => {
          console.log(error);
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
    case FETCH_FAVORITES: {
      // const { user: { token } } = store.getState();

      // dans nos requête qui font suite au login,
      // plus besoin de joindre le token à la main,
      // il est déjà présent dans l'instance d'axios

      console.log(axiosInstance);

      axiosInstance.get(
        'favorites',
        // On envoie le token dans un header de notre requete pour l'autorisation
        // {
        //   headers: {
        //     Authorization: `bearer ${token}`,
        //   },
        // },
      )
        .then((response) => {
          // console.log(response);
          // Une fois qu'on a reucp la liste des favoris, on veut les mémoriser dans le state
          // Pour que notre UI les affiche !
          store.dispatch(saveFavorites(response.data.favorites));
          return next(action);
        })
        .catch((err) => {
          console.log(err);
          return next(action);
        });

      return next(action);
    }
    default:
      return next(action);
  }
};

export default userMiddleware;
