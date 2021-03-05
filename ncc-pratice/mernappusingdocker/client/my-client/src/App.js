import "./App.css";
import ApolloClient from "apollo-boost"; //connect with our server which is running at backend
import { ApolloProvider } from "react-apollo"; // Connect react with apollo.
import CardList from "./components/cars/CardList"; // import Cardlist
import AddCar from "./components/cars/AddCar";
import DemoUseRef from "./components/useRef/DemoUseRef";
import CheckOutForm from "./components/validate/CheckOutForm";
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap
//Using ApolloClient to connect with server
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DemoUseRef />
        <CheckOutForm />
        {/* <h1>List of Cards</h1>
        <CardList></CardList>
        <h1>Add Car</h1>
        <AddCar /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
