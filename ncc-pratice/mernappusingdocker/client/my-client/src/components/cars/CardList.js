import React from "react";
import { getCarsQuery } from "../../queries/queries";
import { graphql } from "react-apollo";

const CardList = (props) => {
  console.log("list cars", props); //check in the browser to see this values.

  const displayCars = () => {
    if (props.data.loading) {
      return <div>Loading.....</div>;
    } else {
      return props.data.cars.map((cars) => {
        return <div key={cars.id}>{cars.name}</div>;
      });
    }
  };
  return (
    <div>
      <>
        <ul id="carList">
          <li>CarName</li>
          <li>{displayCars()}</li>
        </ul>
      </>
    </div>
  );
};

export default graphql(getCarsQuery)(CardList); //HOC
