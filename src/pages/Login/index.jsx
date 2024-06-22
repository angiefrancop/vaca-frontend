import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Logo from '../../assets/logo-decoration.svg';
import './login.css';
import { useState } from 'react';
import { useAuth } from '../../auth/AuthProvider';

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [data, setData] = useState({ email: '', password: '' });
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
    fetch(`${import.meta.env.VITE_URL_API}/auth/login`, {
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
        if (data.token) {
          auth.saveUser(data);
          navigate('/groups');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validateData = () => {
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
            Iniciar Sesión
          </Button>
          <Button
            type='button'
            style='secondary'
            onClick={() => navigate('/signup')}
          >
            Registrarme
          </Button>
        </form>
      </div>
    </div>
  );
}
