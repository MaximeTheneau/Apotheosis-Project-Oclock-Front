import HeaderMyAccount from './HeaderMyCompte';
import Buttonnavbar from './Buttonnavbar';

import './styles.scss';

function UserProfileHeader() {
  return (
    <div className="contents-choose">
      <HeaderMyAccount />
      <Buttonnavbar />
    </div>

  );
}

export default UserProfileHeader;
