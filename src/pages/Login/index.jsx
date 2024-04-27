import Button from '../../components/Button/Button';
import Logo from '../../assets/logo-decoration.svg';
import './login.css';
import { useState } from 'react';
export default function Login() {
  const [datos, setDatos] = useState({ email: '', password: '' });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='page-login'>
      <div className='login'>
        <div className='login-logo'>
          <img
            src={Logo}
            alt='Logo'
            width={250}
            height={250}
          />
          <h1 className='login-title'>Iniciar Sesión</h1>
        </div>

        <form
          className='login-form'
          onSubmit={handleSubmit}
        >
          <label
            htmlFor='email'
            className='login-label'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            onChange={handleInputChange}
            className='login-input'
          />
          <label
            htmlFor='password'
            className='login-label'
          >
            Contraseña
          </label>
          <input
            type='password'
            id='password'
            onChange={handleInputChange}
            className='login-input'
          />
          <Button
            type='submit'
            style='primary'
          >
            Iniciar Sesión
          </Button>
          <Button
            type='button'
            style='secondary'
          >
            Registrarme
          </Button>
        </form>
      </div>
    </div>
  );
}
