//Get the express library from node_modules which we have just downloaded.
const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;

// avoid cors policy
const cors = require("cors");

const mongoose = require("mongoose"); //using mongoose to connect with db
//Imports
const schema = require("./schema/schema");

//Making const of express() into a variable (JS function first class Object).
const app = express();

//Please change mongoDB connection as maybe I have deleted this db on mlab when you are using it.

mongoose.connect(
  "mongodb://localhost:27017/CarsManagement",
  { useNewUrlParser: true },
  (err, db) => {
    if (err) throw err;
    console.log("Connect with DB successfully.");
    console.log("Database created!");
  }
);
/**
 * Cors added as middleware
 */
app.use(cors());
/*We can use graphql on express server with middlewares, so that whenever
we need graphql query from frontend, our express server can handle it
smoothly.
    graphqlHTTP method let us do what we want to do if we have captured 
'/graphql' middleware.
*/

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

//When our application starts, it will listen on port 4000
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
