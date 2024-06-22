import { useEffect, useState } from 'react';
import CardGroups from '../../components/CardGroups/CardGroups';
import './Groups.css';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import { useAuth } from '../../auth/AuthProvider';

const Groups = () => {
  const url = `${import.meta.env.VITE_URL_API}/groups`;
  const [groups, setGroups] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    const headers = { Authorization: `Bearer ${auth.accessToken}` };
    await fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => {
        setGroups(sortGroups(data));
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Button
        onClick={() => setOpenModal(true)}
        type='button'
      >
        Nuevo
      </Button>
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
          callback={getGroups}
          url={url}
        />
      </div>
    </div>
  );
};

export default Groups;
