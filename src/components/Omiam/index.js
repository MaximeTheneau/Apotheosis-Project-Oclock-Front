import { Route, Routes } from 'react-router';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Connectionform from '../Connectionform';
import CreatedRecipe from '../CreatedRecipe';
import Categories from '../Main/Categories';
import Home from '../Main/Home';
import Search from '../Main/Search';
import Aboutus from '../Pages/Aboutus';
import Tscs from '../Pages/Tscs';
import Privacy from '../Pages/Privacy';
import Contact from '../Pages/Contact';
import UserProfile from '../UserProfile';
import MyRecipes from '../UserProfile/MyRecipes';
import MyMiams from '../UserProfile/MyMiams';
import MyChiefs from '../UserProfile/MyChiefs';
import Error from '../Error';

import './styles.scss';

// == Composant
function Omiam() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes/:slug" element={<Categories />} />
          <Route path="/recette/recherche" element={<Search />} />
          <Route path="/qui-sommes-nous" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mention-legales" element={<Privacy />} />
          <Route path="/conditions-generales-utilisation" element={<Tscs />} />
          <Route path="/connexion" element={<Connectionform />} />
          <Route path="/mon-compte" element={<UserProfile />} />
          <Route path="/mon-compte/mes-recettes" element={<MyRecipes />} />
          <Route path="/mon-compte/mes-miams" element={<MyMiams />} />
          <Route path="/mon-compte/mes-chefs" element={<MyChiefs />} />
          <Route path="/Creer/Recette" element={<CreatedRecipe />} />
          <Route path="*" element={<Error />} />
          {/*
            <Route path="/mon-compte/ajouter-une-recette" element={< />} />
            <Route path="/inscription" element={< />} />
          */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// == Export
export default Omiam;
