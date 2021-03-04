// import React from "react";
// import { compose } from "recompose";
// import {
//   getOwnersQuery,
//   AddCarMutation,
//   getCarsQuery,
// } from "../../queries/queries";
// import { graphql } from "react-apollo";
// import HandleFormHook from "../../hooks/HandleFormHook";

// const AddCar = (props) => {
//   const getFormData = () => {
//     console.log(`${inputs}`);
//     props.AddCarMutation({
//       variables: {
//         name: inputs.carName,
//         model: parseInt(inputs.model),
//         company: inputs.company,
//         ownerId: inputs.owner,
//       },
//       refetchQueries: [{ query: getCarsQuery }],
//     });
//   };

//   const { inputs, handleInputChange, handleSubmit } = HandleFormHook(
//     getFormData
//   );

//   const getOwners = () => {
//     var data = props.getOwnersQuery;
//     if (data.loading) {
//       return <option disabled>Owner loading...</option>;
//     } else {
//       return data.owners.map((owner) => {
//         return (
//           <option key={owner.id} value={owner.id}>
//             {owner.name}
//           </option>
//         );
//       });
//     } //esle ends here
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="field">
//           <label>Car Name</label>
//           <input
//             type="text"
//             name="carName"
//             onChange={handleInputChange}
//             value={inputs.carName}
//           ></input>
//         </div>
//         <div className="field">
//           <label>Model</label>
//           <input
//             type="number"
//             name="model"
//             onChange={handleInputChange}
//             value={inputs.model}
//           ></input>
//         </div>
//         <div className="field">
//           <label>Company:</label>
//           <input
//             type="text"
//             name="company"
//             onChange={handleInputChange}
//             value={inputs.company}
//           ></input>
//         </div>
//         <div className="field">
//           <label>Owner:</label>
//           <select
//             name="owner"
//             onChange={handleInputChange}
//             value={inputs.owner}
//           >
//             <option>Select Owner</option>
//             {getOwners(props)}
//           </select>
//         </div>
//         <button>AddCar</button>
//       </form>
//     </>
//   );
// };

// export default compose(
//   graphql(getOwnersQuery, { name: "getOwnersQuery" }),
//   graphql(AddCarMutation, { name: "AddCarMutation" })
// )(AddCar);

import React from "react";
import { graphql } from "react-apollo";
import {
  getCarsQuery,
  getOwnersQuery,
  AddCarMutation,
} from "../../queries/queries";
import { compose } from "recompose";
import HandleFormHook from "../../hooks/HandleFormHook";

function AddCar(props) {
  const getFormData = () => {
    console.log(`${inputs}`);
    //Hitting AddCarMutation with arguments.
    props.AddCarMutation({
      variables: {
        name: inputs.carName,
        model: parseInt(inputs.mode),
        company: inputs.company,
        ownerId: inputs.owner,
      },
      refetchQuery: [{ query: getCarsQuery }], // to update carsQuery on CarList.js
    });
  };
  const { inputs, handleInputChange, handleSubmit } = HandleFormHook(
    getFormData
  );
  const getOwners = () => {
    const data = props.getOwnersQuery;
    if (data.loading) {
      return (
        <div>
          <option value="">Owner loading.....</option>
        </div>
      );
    } else {
      console.log("list owner>>>>>>", data.owner);

      return data.owners.map((owner) => {
        return (
          <option value={owner.id} key={owner.id}>
            {owner.name}
          </option>
        );
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Car Name</label>
          <input
            type="text"
            name="carName"
            value={inputs.carName}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="field">
          <label>Model</label>
          <input
            type="number"
            name="model"
            value={inputs.model}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="field">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            onChange={handleInputChange}
            value={inputs.company}
          ></input>
        </div>
        <div className="field">
          <label>Owner:</label>
          <select
            onChange={handleInputChange}
            name="owner"
            value={inputs.owner}
          >
            <option>Select Owner</option>
            {getOwners(props)}
          </select>
        </div>
        <button>AddCar</button>
      </form>
    </>
  );
}

//For hitting two queries we need compose library.
export default compose(
  graphql(getOwnersQuery, { name: "getOwnersQuery" }),
  graphql(AddCarMutation, { name: "AddCarMutation" })
)(AddCar);
