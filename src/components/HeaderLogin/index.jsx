import './HeaderLogin.css';
import Logo from '../../assets/logo.svg';

const HeaderLogin = () => {
  return (
    <header className='header-login'>
      <div className='header-login-logo'>
        <img
          src={Logo}
          alt='Logo'
          width={50}
          height={50}
        />
        <h1 className='header-login-title'>Mi vaquita</h1>
      </div>
    </header>
  );
};

export default HeaderLogin;
