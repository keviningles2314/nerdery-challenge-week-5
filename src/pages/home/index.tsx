import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
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
  const { isLogged, userID } = isUserLogged() as ILogged;
  return (
    <div className='Home'>
      {!isLogged && <Navigate to='/login' replace={true} />}
      <div className='posts-content'>
        <UserPosts userId={userID} />
      </div>
    </div>
  );
};

export default Home;
