import { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../util/getUser';
import { isUserLogged } from '../util/loginUser';
import Navbar from './Navbar';
import './layout.css';
interface ILogged {
  isLogged: boolean;
  userID: number;
}

const Layout = ({ children }: PropsWithChildren) => {
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
    <div className='layout'>
      <div className='navbar'>
        {!isLoading && <Navbar userInfo={userInformation[0]} />}
      </div>
      <main className='main'>{children}</main>
    </div>
  );
};
export default Layout;
//
