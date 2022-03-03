import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData, reserveRocketDispatch } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const rockets = useSelector((state) => state.reducerRockets);

  const reserveRocket = (id) => {
    dispatch(reserveRocketDispatch(id));
  };

  return (
    <div className="rockets-list">
      {rockets.map((rock) => (
        <div className="rocket-element" key={rock.id}>
          <div className="image-content">
            <img src={rock.flickr_images[0]} alt={rock.rocket_name} />
          </div>

          <div className="rocket-info">
            <h3>{rock.rocket_name}</h3>
            <p>{rock.description}</p>
            <button id={rock.id} type="submit" onClick={() => reserveRocket(rock.id)}>Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
