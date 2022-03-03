/* eslint-disable max-len */
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.reducerRockets).filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-container">
      <div>
        <h2>My Missions</h2>
      </div>
      <div>
        <h2>My Rockets</h2>
        <div className="rocket-reserved">
          {rockets.map((rocket) => <div key={rocket.id}><h4>{rocket.rocket_name}</h4></div>)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
