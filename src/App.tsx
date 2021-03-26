import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import './App.css';
import Users from './components/Users';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/landing" exact>
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;
