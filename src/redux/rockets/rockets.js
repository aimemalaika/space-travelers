const initialState = {
  rockets: [],
};

const FETCH_DATA = 'FETCH_DATA';

export const getFetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

const reducerRockets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        rockets: [...action.payload],
      };
    case 'SECOND_ACTION':
      return [];
    default:
      return state;
  }
};

export default reducerRockets;
