import { Link } from 'react-router-dom';
import './styles.scss';

function UserProfile() {
  return (
    <>
      <Link to="/mon-compte" />
      <div className="user-profile">
        <div className="list">
          <ul className="list-choise">
            <li className="my-recipe"></li>
            <li className="my-miams"></li>
            <li className="my-chief"></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
