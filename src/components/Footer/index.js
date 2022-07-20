import Aboutus from './Aboutus';
import Tscs from './Tscs';
import Privacy from './Privacy';
import Contact from './Contact';
import './styles.scss';

function Footer() {
  return (
    <div className="footer">
      <Aboutus />
      <Tscs />
      <Privacy />
      <Contact />
    </div>
  );
}

export default Footer;
