import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/AuthProvider';
import Avatar from '../../assets/no-profile-picture-15257.svg';
import './Friends.css';

const Friends = () => {
  const url = `${import.meta.env.VITE_URL_API}/users`;
  const [friends, setFriends] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    const headers = { Authorization: `Bearer ${auth.accessToken}` };
    await fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => {
        setFriends(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='content-page'>
      {friends.map((friend) => (
        <div
          key={friend.id}
          className='user-card'
        >
          <img
            src={Avatar}
            alt={`Avatar de ${friend.name}`}
            width={50}
            height={50}
            className='user-avatar'
          />
          <div className='user-info'>
            <h2>{friend.name}</h2>
            <p>{friend.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
