import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../util/loginUser';
import './loginStyle.css';

const Login = () => {
  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
  const [textUserEmail, setTextUserEmail] = useState('');
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(textUserEmail)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [textUserEmail]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextUserEmail(event.target.value);
  };
  const handleClick = async () => {
    const isExisting = await loginUser(textUserEmail);
    if (isExisting) {
      setIsLogin(true);
      setDisplayErrorMessage(false);
    } else {
      setDisplayErrorMessage(true);
    }
  };
  return (
    <div className='Login'>
      {isLogin && <Navigate to='/' replace={true} />}
      <div className='login-form'>
        <div className='form-content'>
          <h1>Welcome</h1>
          <input
            value={textUserEmail}
            onChange={(e) => handleTextChange(e)}
            id='textBoxEmail'
            type='text'
            placeholder='user@ravn.co'
          />
          <button
            id='loginButton'
            onClick={handleClick}
            className={`button-${isbuttonDisabled ? 'disabled' : 'enabled'}`}
            disabled={isbuttonDisabled}
          >
            LOGIN
          </button>
          {displayErrorMessage && <p>user was not found!</p>}
        </div>
      </div>
    </div>
  );
};
export default Login;
//
