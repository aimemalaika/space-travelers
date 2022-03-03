import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.reducerRockets).filter(rocket => rocket.reserved === true);

  return (
    <div className="profile-container">
      <div>
      <h2>My Missions</h2>
      </div>
      <div>
      <h2>My Rockets</h2>
      <div>
        {rockets.map((rocket) => {
          return <div key={rocket.id}>{rocket.rocket_name}</div>
        })}
      </div>
      </div>
    </div>
  )
}

export default Profile;