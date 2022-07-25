import { Route, Routes } from 'react-router';
import CreatedRecipe from '../CreatedRecipe';
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
        <Route path="/Creer/Recette" element={<CreatedRecipe />} />

      </Routes>
    </div>
  );
}

export default Main;
