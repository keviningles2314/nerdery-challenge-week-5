import { Link } from 'react-router-dom';
import './navbar.css';

export interface Iprops {
  userInfo: { id: number; name: string };
}
const Navbar = ({ userInfo }: Iprops) => {
  return (
    <div className='Navbar'>
      <div className='navbar-links'>
        <Link to={'/'} className='yellow-navbar-text selected'>
          My posts
        </Link>
        <p className='yellow-navbar-text'>All posts</p>
      </div>
      <div className='navbar-bottom-items'>
        <p> {`Logged in as: ${userInfo.name}`}</p>
        <p className='logout'>LOGOUT</p>
      </div>
    </div>
  );
};
export default Navbar;
