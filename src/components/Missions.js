import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMission, joinMission } from '../redux/missions/mission';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission);
  }, []);
  const missions = useSelector((state) => state.missionReducer);
  const missionTable = missions.map(({
    id, name, description, reserved,
  }) => (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td className="text-center"><span className={(!reserved) ? 'status-field unavailable-status ' : 'status-field available-status'}>{(!reserved) ? 'NOT A MEMBER' : 'ACTIVE MEMBER'}</span></td>
      <td className="text-center"><button onClick={() => dispatch(joinMission(id))} className={(!reserved) ? 'button-mission join-mission' : 'button-mission leave-mission'} type="button">{(!reserved) ? 'JOIN MISSION' : 'LEAVE MISSION'}</button></td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="mission-name">Mission</th>
            <th className="mission-description">Description</th>
            <th className="mission-status">Status</th>
            <th aria-label="mission action" className="mission-action" />
          </tr>
        </thead>
        <tbody>
          { missionTable }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
