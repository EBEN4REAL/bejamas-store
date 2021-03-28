import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import React from 'react';
import './App.css';
import Users from './components/Users';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing';
import {setContext} from "apollo-link-context"
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';

const httpLink = new HttpLink({uri: 'http://localhost:4000'})
console.log(httpLink)

const authLink = setContext(async(req, {headers}) => {
  const token = localStorage.getItem('token')

  return {
    ...headers,
    headers: {
      Authorization: token ? `bearer ${token}`  : null
    }
  }
})

const link = authLink.concat(httpLink as  any)
const client = new ApolloClient({
  link: link as any,
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
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;
