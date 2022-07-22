import { Route, Routes } from 'react-router';
import Categories from './Categories';
import Home from './Home';
import Search from './Search';

import './styles.scss';

function Main() {
  return (
    <div className="main">

      <Routes>
        <Route path="/e" element={<Categories />} />
        <Route path="/" element={<Home />} />
        <Route path="/recettes/recherche" element={<Search />} />
      </Routes>
    </div>
  );
}

export default Main;
