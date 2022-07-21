import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Omiam from 'src/components/Omiam';

const rootReactElement = (
  <BrowserRouter>
    <Omiam />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
