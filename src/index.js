import { createRoot } from 'react-dom/client';

import Omiam from 'src/components/Omiam';

const rootReactElement = <Omiam />;

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
