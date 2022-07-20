import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import './styles.scss';

// == Composant
function Omiam() {
  return (
    <div className="omiam">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

// == Export
export default Omiam;
