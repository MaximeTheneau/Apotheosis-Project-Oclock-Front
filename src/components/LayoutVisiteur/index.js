import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

function Layoutvisiteur() {
  <>
    <Header />
    <Outlet />
    <Footer />
  </>;
}

export default Layoutvisiteur;
