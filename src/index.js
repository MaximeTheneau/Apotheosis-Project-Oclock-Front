import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Omiam from 'src/components/Omiam';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <Omiam />
  </Provider>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
