import { Route, Routes } from 'react-router';
import Categories from './Categories';
import Home from './Home';

import './styles.scss';

function Main() {
  return (
    <div className="main">

      <Routes>
        <Route path="/recette/slug" element={<Categories />} />
        <Route path="" element={<Home />} />

      </Routes>
    </div>
  );
}

export default Main;
