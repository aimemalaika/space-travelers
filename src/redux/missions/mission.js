const GET_MISSIONS = 'space-travel/mission/GET_MISSIONS';
const JOIN_MISSION = 'space-travel/mission/JOIN_MISSION';
const BASE_URL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const getMission = async (dispatch) => {
  const request = await fetch(BASE_URL);
  if (request.status === 200) {
    const response = await request.json();
    const payload = response.map(
      ({ mission_id: id, mission_name: name, description }) => ({
        id,
        name,
        description,
      }),
    );
    dispatch({
      type: GET_MISSIONS,
      payload,
    });
  }
};

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return action.payload;
    case JOIN_MISSION: return state.map((mission) => (mission.id === action.payload
      ? { ...mission, reserved: true } : mission));
    default: return state;
  }
};

export default missionReducer;
