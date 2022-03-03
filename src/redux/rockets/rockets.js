 /* eslint-disable max-len */
const initialState = [];

const FETCH_DATA = 'FETCH_DATA';
const RESERVE_ROCKET = 'RESERVE_ROCKET';

const getFetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const reserveRocketDispatch = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const getData = () => async (dispatch) => {
  const answer = await fetch('https://api.spacexdata.com/v3/rockets');
  const answerJason = await answer.json();
  const filterData = answerJason.map((ele) => ({
    id: ele.id,
    rocket_name: ele.rocket_name,
    description: ele.description,
    flickr_images: ele.flickr_images,
  }));

  dispatch(getFetchData(filterData));
};

const reducerRockets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...action.payload];
    case RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload ? ({ ...rocket, reserved: true }) : rocket));
    default:
      return state;
  }
};

export default reducerRockets;
