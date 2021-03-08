import React from "react";
import { compose } from "recompose";
import {
  getOwnersQuery,
  AddCarMutation,
  getCarsQuery,
} from "../../queries/queries";
import { graphql } from "react-apollo";
import HandleFormHook from "../../hooks/HandleFormHook";

const AddCar = (props) => {
  const getFormData = () => {
    console.log(`${inputs}`);
    props.AddCarMutation({
      variables: {
        name: inputs.carName,
        model: parseInt(inputs.model),
        company: inputs.company,
        ownerId: inputs.owner,
      },
      refetchQueries: [{ query: getCarsQuery }],
    });
  };

  const { inputs, handleInputChange, handleSubmit } = HandleFormHook(
    getFormData
  );

  const getOwners = () => {
    var data = props.getOwnersQuery;
    if (data.loading) {
      return <option disabled>Owner loading...</option>;
    } else {
      return data.owners?.map((owner) => {
        return (
          <option key={owner.id} value={owner.id}>
            {owner.name}
          </option>
        );
      });
    } //esle ends here
  };

  return (
    <>
      <div className="col-md-8 col-offset-md-2 container d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="text-center mb-5">
          <div class="mb-3 d-flex flex-row">
            <div className="row">
              <div className="d-flex flex-column">
                <div class="d-flex flex-row">
                  <label for="firstName" className="col-md-6 text-right">
                    Car name
                  </label>
                  <input
                    type="text"
                    name="carName"
                    onChange={handleInputChange}
                    value={inputs.carName}
                    className="col-md-6 form-control"
                  ></input>
                </div>
                <div class="d-flex flex-row mt-2">
                  <label className="col-md-6 text-right">Model</label>
                  <input
                    type="number"
                    name="model"
                    onChange={handleInputChange}
                    value={inputs.model}
                    className="col-md-6 form-control"
                  ></input>
                </div>
                <div class="d-flex flex-row mt-2">
                  <label className="col-md-6 text-right">Company</label>
                  <input
                    type="text"
                    name="company"
                    onChange={handleInputChange}
                    value={inputs.company}
                    className="form-control"
                  ></input>
                </div>
                <div class="d-flex flex-row mt-2">
                  <label className="col-md-6 text-right">Owner</label>
                  <select
                    name="owner"
                    onChange={handleInputChange}
                    value={inputs.owner}
                    className="custom-select d-block w-100"
                  >
                    <option>Select Owner</option>
                    {getOwners(props)}
                  </select>
                </div>
              </div>
              <div class="col-md-7 d-flex flex-column d-flex justify-content-start"></div>
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>
          </div>

          <button className="btn btn-outline-primary">AddCar</button>
        </form>
      </div>
    </>
  );
};

export default compose(
  graphql(getOwnersQuery, { name: "getOwnersQuery" }),
  graphql(AddCarMutation, { name: "AddCarMutation" })
)(AddCar);
