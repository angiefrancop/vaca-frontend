import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/layer-MC1.svg';
import './CardGroups.css';
import Button from '../Button/Button';

const CardGroups = ({ id, name, color }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/groups/${id}`;
    navigate(path);
  };

  const showMessageDeleteGroup = () => {
    let text = `Esta seguro de eliminar ${name}!`;
    if (confirm(text) == true) {
      deleteGroup();
    }
  };

  const deleteGroup = () => {
    if (!id) return;
    const url = `${import.meta.env.VITE_URL_API}/groups/${id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className='card'
      key={id}
    >
      <div className='card__image'>
        <div style={{ backgroundColor: color }}>
          <img
            src={Logo}
            alt='Logo'
            width={80}
            height={80}
          />
        </div>
        <h2>{name}</h2>
      </div>
      <div className='card__content'>
        <h2>{name}</h2>
        <p>
          Debes: <span>$12.000</span>
        </p>
        <div className='card__actions'>
          <Button
            type='button'
            onClick={() => routeChange()}
          >
            Editar
          </Button>
          <Button
            type='button'
            onClick={() => showMessageDeleteGroup()}
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardGroups;
