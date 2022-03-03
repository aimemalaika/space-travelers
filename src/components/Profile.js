/* eslint-disable max-len */
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.reducerRockets).filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missionReducer).filter((mission) => mission.reserved === true);
  return (
    <div className="profile-container">
      <div className="special-margin">
        <h2>My Missions</h2>
        <div className="rocket-reserved">
          {missions.map((mission) => <div key={mission.id}><h4>{mission.name}</h4></div>)}
        </div>
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
