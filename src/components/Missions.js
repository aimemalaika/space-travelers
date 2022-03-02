import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMission } from '../redux/missions/mission';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission);
  }, []);
  const missions = useSelector((state) => state.missionReducer);
  const missionTable = missions.map((mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td className="text-center"><span className="status-field unavailable-ststus">NOT A MEMBER</span></td>
      <td className="text-center"><button className="button-mission join-mission" type="button">JOIN MISSION</button></td>
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
