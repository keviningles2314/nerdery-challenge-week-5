import { Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getUserInfo } from '../../util/getUser';
import { isUserLogged } from '../../util/loginUser';
import './home.css';
import UserPosts from './userPosts';
interface ILogg {
  isLogged: boolean;
  userID: number;
}
const Home = () => {
  const { isLogged, userID } = isUserLogged() as ILogg;
  getUserInfo(userID).then((data) => console.log(data));
  return (
    <div className='Home'>
      {!isLogged && <Navigate to='/login' replace={true} />}
      <div className='navbar'>
        <Navbar userId={userID} />
      </div>
      <div className='userposts'>
        <UserPosts />
      </div>
    </div>
  );
};

export default Home;
