import React, { useEffect, useState } from 'react';
import './loginStyle.css';

const Login = () => {
  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
  const [textUserEmail, setTextUserEmail] = useState('');

  useEffect(() => {
    if (/\S+@\S+\.\S+/.test(textUserEmail)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [textUserEmail]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextUserEmail(event.target.value);
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
          <button id='loginButton'>LOGIN</button>

          <h3>{isbuttonDisabled ? 'disabled' : 'correct'}</h3>
        </div>
      </div>
    </div>
  );
};
export default Login;
