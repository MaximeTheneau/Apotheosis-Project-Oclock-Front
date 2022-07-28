import axios from 'axios';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const homePage = (store) => (next) => (action) => {
  switch (action.type) {

    default:
      return next(action);
  }
};

export default homePage;