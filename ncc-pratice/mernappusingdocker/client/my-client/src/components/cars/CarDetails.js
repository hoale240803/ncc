import React from "react";
import { graphql } from "react-apollo";
import { getCarQuery } from "../../queries/queries";

const CarDetails = (props) => {
  console.log(props.carId.Id);

  const getCarDetails = () => {
    const { car } = props.data;
    console.log(car);
    if (car) {
      return (
        <div>
          <h1>Car Detail</h1>
          <h2>{car.name}</h2>
          <p>model : {car.model}</p>
          <p>company : {car.company}</p>
          <p>owner : {car.owner.name}</p>
          <p>All cars by this owner :</p>
          <ul>
            {car.owner.cars.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Car Detail</h1>
          <div>No Car Selected</div>
        </div>
      );
    }
  };

  return <div id="carDetails">{getCarDetails()}</div>;
};

export default graphql(getCarQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.carId.Id,
      },
    };
  },
})(CarDetails);
