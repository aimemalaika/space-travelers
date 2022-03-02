const GET_MISSIONS = 'bookStore/books/GET_MISSIONS';
const BASE_URL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const getMission = async (dispatch) => {
  const request = await fetch(BASE_URL);
  if (request.status === 200) {
    const payload = await request.json();
    dispatch({
      type: GET_MISSIONS,
      payload,
    });
  }
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return action.payload;
    default: return state;
  }
};

export default missionReducer;
