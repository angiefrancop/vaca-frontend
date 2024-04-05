import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/layer-MC1.svg';
import './CardGroups.css';
const CardGroups = ({ id, name, color }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/groups/${id}`;
    navigate(path);
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
          <button onClick={() => routeChange()}>Editar</button>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default CardGroups;
