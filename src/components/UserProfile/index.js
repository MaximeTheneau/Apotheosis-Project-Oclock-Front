import { Link } from 'react-router-dom';
import HeaderMyAccount from './HeaderMyCompte';
import MyMiams from './MyMiams';
import './styles.scss';

function UserProfile() {
  return (
    <>
      <HeaderMyAccount />
      <div className="contenu-choose">
        <MyMiams />
      </div>
    </>
  );
}

export default UserProfile;
