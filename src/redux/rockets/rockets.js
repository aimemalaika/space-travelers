const initialState = [];

const FETCH_DATA = 'FETCH_DATA';

const getFetchData = (payload) => ({
  type: FETCH_DATA,
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
    case 'SECOND_ACTION':
      return [];
    default:
      return state;
  }
};

export default reducerRockets;
