import React, { useEffect, useState } from 'react';
import Logo from '../../assets/layer-MC1.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Groups.css';
import Modal from '../../components/Modal/Modal';

const GroupById = () => {
  let { id } = useParams();
  const url = `http://localhost:3001/api/groups/${id}`;
  const [group, setGroup] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getGroup();
  }, []);

  const editGroup = (data) => {
    setGroup(data);
  };

  const getGroup = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGroup(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='content-page groups-content'>
      <div className='group__actions'>
        <button>Nuevo gasto</button>
        <button>Nuevo amigo</button>
        <button onClick={() => setOpenModal(true)}>Editar grupo</button>
      </div>
      {group && (
        <section className='group__info'>
          <div className='group__image'>
            <div style={{ backgroundColor: group.color }}>
              <img
                src={Logo}
                alt='Logo'
                width={80}
                height={80}
              />
            </div>
            <div className='group__data'>
              <h2>{group.name}</h2>
              <p>
                Debes en total: <span>$12.000</span>
              </p>
              <button>Salir del grupo</button>
            </div>
          </div>
          <div className='group__info__expenses'>
            <h3>Gastos</h3>
            <ul>
              {group.expenses &&
                group.expenses.map((expense) => (
                  <li key={expense.id}>
                    <span>{expense.description}</span>
                    <span>{expense.amount}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className='group__info__members'>
            <h3>Miembros</h3>
            <ul>
              {group.members &&
                group.members.map((member) => (
                  <li key={member.id}>
                    <img
                      src={member.photo}
                      alt={member.name}
                    />
                    <span>{member.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      )}
      <Modal
        title='Editar Grupo'
        onClose={() => setOpenModal(false)}
        open={openModal}
        group={group}
        accion={'PUT'}
        dataGroups={editGroup}
        url={url}
      />
    </div>
  );
};

export default GroupById;
