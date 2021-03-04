/// schema.js
const graphql = require("graphql");
const _ = require("lodash");

const cars = require("../models/car");
const owners = require("../models/owner");

/*Getting GraphQLObjectType function from 'graphql' to define the (dataType) 
 structure of our queries and their model type.
*/
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const CarsArray = [
  {
    id: "1",
    name: "S-Class",
    model: "2019",
    company: "Mercedes",
    ownerId: "1",
  },
  {
    id: "2",
    name: "Continental GT",
    model: "2019",
    company: "Bentley",
    ownerId: "2",
  },
  {
    id: "3",
    name: "Phantom",
    model: "2019",
    company: "Rolls-Royce",
    ownerId: "1",
  },
  {
    id: "4",
    name: "Panamera",
    model: "2019",
    company: "Porsche",
    ownerId: "2",
  },
  { id: "5", name: "A8", model: "2019", company: "Audi", ownerId: "1" },
  { id: "6", name: "I-Pace", model: "2019", company: "Jaguar", ownerId: "3" },
];
const OwnersArray = [
  { id: "1", name: "Vinod Chauhan", age: 27, gender: "male" },
  { id: "2", name: "John Dow", age: 46, gender: "male" },
  { id: "3", name: "Kristen", age: 30, gender: "female" },
  { id: "4", name: "Paris", age: 44, gender: "female" },
  { id: "5", name: "Sylvestor", age: 26, gender: "male" },
];

//Defining CarType with its fields.
const CarType = new GraphQLObjectType({
  name: "Car",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    model: { type: GraphQLInt },
    company: { type: GraphQLString },
    owner: {
      //Supporting pwner query in carType
      type: OwnerType,
      resolve(parent, args) {
        // parent lấy từ lúc gọi object car
        return owners.findById(parent.ownerId);
      },
    }, //owner
  }),
});

const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    cars: {
      // Supporting list of cars query in Owner type
      type: new GraphQLList(CarType),
      resolve(parent, args) {
        return cars.find({ ownerId: parent.id });
      },
    },
  }),
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addOwner: {
      type: OwnerType,
      args: {
        name: {
          type: GraphQLString,
        },
        age: { type: GraphQLInt },
        gender: { type: GraphQLString },
      },
      resolve(parent, args) {
        let owner = new owners({
          name: args.name,
          age: args.age,
          gender: args.gender,
        });
        return owner.save();
      },
    },
    addCar: {
      type: CarType,
      args: {
        name: { type: GraphQLString },
        model: { type: GraphQLInt },
        company: { type: GraphQLString },
        ownerId: { type: GraphQLID },
      },
      resolve(parent, args) {
        let car = new cars({
          name: args.name,
          model: args.model,
          company: args.company,
          ownerId: args.ownerId,
        });

        return car.save();
      },
    }, //addCar
  }, //fields ends here
});
//Defining RootQuery
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    car: {
      // Fields here will be the query for frontends
      //We are defining a 'car' query which can take (car ID ) to search in DB.
      type: CarType, //Defining model for car Query
      args: { id: { type: GraphQLID } }, //args field to extract argument came with car query, e.g : Id of the car object to extract its details.
      resolve(parent, args) {
        //code to get value  from DB
        /**
         * With the help of lodash library(_), we are trying to find car with id from 'CarsArray'
         * and returning its required data to calling tool.
         */
        return cars.findById(args.id);
      }, //resolve function
    }, //car query ends here
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return owners.findById(args.id);
      },
    },
    // return list cars
    cars: {
      type: new GraphQLList(CarType),
      resolve(parent, args) {
        return cars.find({});
      },
    },
    owners: {
      type: new GraphQLList(OwnerType),
      resolve(parent, args) {
        return owners.find({});
      },
    },
  }, //fields end here
}); //resolve function

//exporting 'GraphQLSchema with RootQuery' for GraphqlHTTP middleware.
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
