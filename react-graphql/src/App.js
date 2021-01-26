import logo from './logo.svg';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Display from './Display';


import './App.css';


const client = new ApolloClient({
  uri: "http://localhost:9000/"
});


const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>
      <Display></Display>
    </div>
  </ApolloProvider>
);



export default App;
