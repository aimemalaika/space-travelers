import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <h1>Rockets page</h1>
    </div>
  );
};

export default Rockets;
