import React, { useEffect, useState } from 'react';
import CardGroups from '../../components/CardGroups/CardGroups';
import './Groups.css';
import Modal from '../../components/Modal/Modal';

const Groups = () => {
  const url = 'http://localhost:3001/groups';
  const [groups, setGroups] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGroups(sortGroups(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getNewGroups = (data) => {
    setGroups(sortGroups(data));
  };

  const sortGroups = (data) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  };

  return (
    <div className='content-page groups-content'>
      <button onClick={() => setOpenModal(true)}>Nuevo</button>
      <div className='groups'>
        {groups.map((group) => (
          <CardGroups
            key={group.id}
            id={group.id}
            name={group.name}
            color={group.color}
          />
        ))}
        <Modal
          title='Nuevo Grupo'
          onClose={() => setOpenModal(false)}
          open={openModal}
          dataGroups={getNewGroups}
          url={url}
        />
      </div>
    </div>
  );
};

export default Groups;
