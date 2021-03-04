import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      id
      name
    }
  }
`;
const getOwnersQuery = gql`
  {
    owners {
      id
      name
    }
  }
`;

//mutation function getting arguments from calling function and passing to //addCar.
const AddCarMutation = gql`
  mutation($name: String!, $model: Int!, $company: String!, $ownerId: ID!) {
    addCar(name: $name, model: $model, company: $company, ownerId: $ownerId) {
      name
      id
    }
  }
`;
const getCarQuery = gql`
  query($id: ID!) {
    car(id: $id) {
      id
      name
      model
      company
      owner {
        id
        name
        age
        cars {
          name
          company
          id
        }
      }
    }
  }
`;
export { getCarsQuery, getOwnersQuery, AddCarMutation };
