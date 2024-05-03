import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo-decoration.svg';
import Button from '../../components/Button/Button';

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [messageError, setMessageError] = useState('');
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
    setMessageError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateData()) return;
    fetch(`${import.meta.env.VITE_URL_API}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setMessageError(data.error);
          return;
        }
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateData = () => {
    if (data.name.trim() === '') {
      setMessageError('Digita un nombre para continuar');
      return false;
    }
    if (data.email.trim() === '') {
      setMessageError('Digita un email para continuar');
      return false;
    }

    if (data.password.trim() === '') {
      setMessageError('Digita una contraseña para continuar');
      return false;
    }
    return true;
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
            name='name'
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
            name='email'
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
            name='password'
            onChange={handleInputChange}
            className='login-input'
          />
          <span className='error'>{messageError}</span>
          <Button
            type='submit'
            style='primary'
          >
            Registrarme
          </Button>
          <Button
            type='button'
            style='secondary'
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
