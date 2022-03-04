import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission, getMission } from '../redux/missions/mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length <= 0) {
      dispatch(getMission());
    }
  }, []);

  const missionTable = missions.map(({
    id, name, description, reserved,
  }) => (
    <tr key={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td className="text-center"><span className={(!reserved && 'status-field unavailable-status') || (reserved && 'status-field available-status')}>{(!reserved && 'NOT A MEMBER') || (reserved && 'ACTIVE MEMBER')}</span></td>
      <td className="text-center"><button onClick={() => dispatch((!reserved && joinMission(id)) || (reserved && leaveMission(id)))} className={(!reserved && 'button-mission join-mission') || (reserved && 'button-mission leave-mission')} type="button">{(!reserved && 'JOIN MISSION') || (reserved && 'LEAVE MISSION')}</button></td>
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
