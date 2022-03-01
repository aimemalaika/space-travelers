import { useDispatch } from "react-redux";
import { getFetchData } from "../redux/rockets/rockets";

const Rockets = () => {
  const dispatch = useDispatch();

  const storeData = (data) => {
    const filterData = data.map((ele) => ({
      id: ele.id,
      rocket_name: ele.rocket_name,
      description: ele.description,
      flickr_images: ele.flickr_images,
    }));

    dispatch(getFetchData(filterData));
  };

  const getData = async () => {
    const answer = await fetch("https://api.spacexdata.com/v3/rockets");
    const answerJason = await answer.json();
    storeData(answerJason);
  };

  getData();
  return (
    <div>
      <h1>Rockets page</h1>
    </div>
  );
};

export default Rockets;
