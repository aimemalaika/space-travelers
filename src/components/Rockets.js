const Rockets = () => {
  const getData = async () => {
    const answer = await fetch('https://api.spacexdata.com/v3/rockets');
    const answerJason = await answer.json();
    console.log(answerJason);
  };

  getData();
  return (
  <div>
    <h1>Rockets page</h1>
  </div>
  );
};

export default Rockets;
