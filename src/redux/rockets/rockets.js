const initialState = [];

const reducerRockets = (state = initialState, action) => {
  switch (action.type) {
    case 'FIRST_ACTION':
      return [];
    case 'SECOND_ACTION':
      return [];
    default:
      return state;
  }
};

export default reducerRockets;
