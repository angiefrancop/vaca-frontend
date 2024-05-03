import './Modal.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import checkIcon from '../../assets/check-icn.svg';
import Button from '../Button/Button';

const Modal = ({ open, title, onClose, callback, url, group, accion }) => {
  if (!open) return null;
  const colorList = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#8e44ad', '#e67e22', '#1abc9c', '#d35400'];

  let initialGroup = group || { name: '', color: '#3498db' };
  const [data, setData] = useState(initialGroup);

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
    fetch(url, {
      method: accion || 'POST',
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
        callback();
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateData = () => {
    if (data.name.trim() === '') {
      setMessageError('Elige un nombre para continuar');
      return false;
    }

    if (data.color.trim() === '') {
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
                value={data.name}
              />
              <div className='inputs-color'>
                {colorList.map((color, index) => (
                  <div key={index}>
                    <input
                      type='radio'
                      name='color'
                      value={color}
                      id={`color-${index}`}
                      checked={data.color === color}
                      onChange={handleInputChange}
                    />

                    <label htmlFor={`color-${index}`}>
                      <span style={{ backgroundColor: color }}>
                        <img
                          src={checkIcon}
                          alt='Checked Icon'
                        />
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              <Button type='submit'>Guardar</Button>
              <span className='error'>{messageError}</span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  group: PropTypes.object,
  accion: PropTypes.string
};
export default Modal;
