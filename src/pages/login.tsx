import './loginStyle.css';
const Login = () => {
  return (
    <div className='Login'>
      <div className='login-form'>
        <div className='form-content'>
          <h1>Welcome</h1>
          <input id='textBoxEmail' type='text' placeholder='user@ravn.com' />
          <button id='loginButton'>LOGIN</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
