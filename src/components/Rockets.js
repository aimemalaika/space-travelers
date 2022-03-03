import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.reducerRockets);

  const dispatch = useDispatch();

  const reserveCancelRocket = (id, status) => {
    if (status === true) {
      dispatch(cancelReservation(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  const btnReserve = {
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
  };

  const btnCancelation = {
    color: '#6d757d',
    backgroundColor: 'white',
    border: '1px solid #6d757d',
  };

  const badge = {
    backgroundColor: '#18a2b8',
    color: '#fff',
    padding: '2px 5px',
    borderRadius: '5px',
    marginRight: '10px',
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
            <p>
              <span style={rock.reserved === true ? badge : null}>{rock.reserved === true ? 'Reserved' : null}</span>
              {rock.description}
            </p>
            <button style={rock.reserved === true ? btnCancelation : btnReserve} type="submit" onClick={() => reserveCancelRocket(rock.id, rock.reserved)}>{rock.reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
