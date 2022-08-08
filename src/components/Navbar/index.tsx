import { Link } from 'react-router-dom';
import { userLogOut } from '../../util/loginUser';
import './navbar.css';

export interface Iprops {
  userInfo: { id: number; name: string };
}
const Navbar = ({ userInfo }: Iprops) => {
  const handleLogOut = () => {
    userLogOut();
  };
  return (
    <div className='Navbar'>
      <div className='navbar-links'>
        <Link to={'/'} className='yellow-navbar-text selected'>
          My posts
        </Link>
        <Link to={'/allposts'} className='yellow-navbar-text'>
          All posts
        </Link>
      </div>
      <div className='navbar-bottom-items'>
        <p> {`Logged in as: ${userInfo.name}`}</p>
        <Link to={'/login'} onClick={handleLogOut} className='logout'>
          LOGOUT
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
