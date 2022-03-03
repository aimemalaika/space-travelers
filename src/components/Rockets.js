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
    color: "white",
    backgroundColor: "#007bff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
  };

  const btnCancelation = {
    color: "gray",
    backgroundColor: "white",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
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
            <button style={rock.reserved === true ? btnCancelation : btnReserve} id={rock.id} type="submit" onClick={() => reserveCancelRocket(rock.id, rock.reserved)}>{rock.reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
