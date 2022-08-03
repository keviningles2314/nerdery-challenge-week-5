import React, { useEffect, useState } from 'react';
import './loginStyle.css';

const Login = () => {
  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
  const [textUserEmail, setTextUserEmail] = useState('');

  useEffect(() => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(textUserEmail)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [textUserEmail]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextUserEmail(event.target.value);
  };
  const handleClick = () => {
    console.log('click');
  };

  console.log(textUserEmail);
  return (
    <div className='Login'>
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
        </div>
      </div>
    </div>
  );
};
export default Login;
