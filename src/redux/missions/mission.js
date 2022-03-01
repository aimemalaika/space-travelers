const GET_MISSIONS = 'bookStore/books/GET_MISSIONS';
const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS: return state;
    default: return state;
  }
};

export default missionReducer;
