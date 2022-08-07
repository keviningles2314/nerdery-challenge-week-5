import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { getUserInfo } from '../../util/getUser';
import { isUserLogged } from '../../util/loginUser';
import './home.css';
import UserPosts from './userPosts';
interface ILogged {
  isLogged: boolean;
  userID: number;
}

const Home = () => {
  const [userInformation, setUserInformation] = useState([]);
  const { isLogged, userID } = isUserLogged() as ILogged;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getUserInfo(userID).then((userData) => {
      setUserInformation(userData);
      setIsLoading(false);
    });
  }, [isLoading]);

  return (
    <div className='Home'>
      {!isLogged && <Navigate to='/login' replace={true} />}
      <div className='navbar'>
        {isLoading && <h1>LOADING...</h1>}
        {!isLoading && <Navbar userInfo={userInformation[0]} />}
      </div>
      <div className='posts-content'>
        <UserPosts userId={userID} />
      </div>
    </div>
  );
};

export default Home;
