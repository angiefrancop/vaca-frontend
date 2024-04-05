import './Modal.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ open, title, onClose, getNewGroups, url }) => {
  if (!open) return null;
  const colorList = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#8e44ad', '#e67e22', '#1abc9c', '#d35400'];

  const [datos, setDatos] = useState({
    name: '',
    color: ''
  });

  const [messageError, setMessageError] = useState('');

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
    setMessageError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateData()) return;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setMessageError(data.error);
          return;
        }
        getNewGroups(data);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateData = () => {
    if (datos.name.trim() === '') {
      setMessageError('Elige un nombre para continuar');
      return false;
    }

    if (datos.color.trim() === '') {
      setMessageError('Elige un color para continuar');
      return false;
    }
    return true;
  };

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal__content'>
          <div className='modal__header'>
            <h2>{title}</h2>
            <p
              className='close-btn'
              onClick={onClose}
            >
              X
            </p>
          </div>
          <div className='modal__body'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                placeholder='Nombre'
                onChange={handleInputChange}
                maxLength={30}
              />
              <div className='inputs-color'>
                {colorList.map((color, index) => (
                  <div key={index}>
                    <input
                      type='radio'
                      name='color'
                      value={color}
                      id={`color-${index}`}
                      onChange={handleInputChange}
                    />

                    <label htmlFor={`color-${index}`}>
                      <span style={{ backgroundColor: color }}>
                        <img
                          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
                          alt='Checked Icon'
                        />
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              <button type='submit'>Guardar</button>
              <span className='error'>{messageError}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
