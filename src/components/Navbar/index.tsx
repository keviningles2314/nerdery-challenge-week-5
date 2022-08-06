import './navbar.css';

interface Iprops {
  userId: number;
}
const Navbar = ({ userId }: Iprops) => {
  return (
    <div className='Navbar'>
      <div className='navbar-links'>
        <p className='yellow-navbar-text selected'>My posts</p>
        <p className='yellow-navbar-text'>All posts</p>
      </div>
      <div className='navbar-bottom-items'>
        <p> Logged in as: username</p>
        <p className='logout'>LOGOUT </p>
      </div>
    </div>
  );
};
export default Navbar;
