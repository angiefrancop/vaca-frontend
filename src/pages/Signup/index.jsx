import { useState } from 'react';
import Logo from '../../assets/logo-decoration.svg';
import Button from '../../components/Button/Button';

const Signup = () => {
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
          <h1 className='login-title'>Registro</h1>
        </div>

        <form
          className='login-form'
          onSubmit={handleSubmit}
        >
          <label
            htmlFor='name'
            className='login-label'
          >
            Nombre
          </label>
          <input
            type='text'
            id='name'
            onChange={handleInputChange}
            className='login-input'
          />
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
            Registrarme
          </Button>
          <Button
            type='button'
            style='secondary'
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
