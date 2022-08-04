import { Navigate } from 'react-router-dom';
import { isUserLogged } from '../../util/loginUser';

const Home = () => {
  const { isLogged, userID } = isUserLogged();
  return (
    <div className='Home'>
      {!isLogged && <Navigate to='/login' replace={true} />}
      <h1>Home</h1>
      <h2>navbar</h2>
    </div>
  );
};

export default Home;
