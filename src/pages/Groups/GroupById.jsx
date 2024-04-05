import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Groups.css';
import CardGroups from '../../components/CardGroups/CardGroups';

const GroupById = () => {
  let { id } = useParams();
  const url = `http://localhost:3001/api/group/${id}`;
  const [group, setGroup] = useState([]);

  useEffect(() => {
    //getGroup();
  }, []);

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
    <div className='content-page group'>
      <button>Nuevo</button>
      {group && <div>group</div>}
    </div>
  );
};

export default GroupById;
