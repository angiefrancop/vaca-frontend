import Logo from '../../assets/Logo.svg';
import LogoProfile from '../../assets/logo-profile.svg';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  console.log('splitLocation--->', splitLocation);
  return (
    <div className='header'>
      <div className='logo'>
        <img
          src={Logo}
          alt='Logo'
          width={50}
          height={50}
        />
        <h1 className='title'>Mi vaquita</h1>
      </div>
      <img
        src={LogoProfile}
        alt='Logo'
        className='logo-profile'
        width={50}
        height={50}
      />
      <nav className='nav-bar'>
        <ul>
          <li className={splitLocation[1] === '' ? 'active' : ''}>
            <Link to='/'>Amigos</Link>
          </li>
          <li className={splitLocation[1] === 'gastos' ? 'active' : ''}>
            <Link to='/gastos'>Gastos</Link>
          </li>
          <li className={splitLocation[1] === 'groups' ? 'active' : ''}>
            <Link to='/groups'>Groups</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
