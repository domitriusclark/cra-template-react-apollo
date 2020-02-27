import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InMemoryCache, ApolloProvider } from "@apollo/client";
import ApolloClient from 'apollo-client';

import resolvers from './apollo/resolvers'
import typeDefs from './apollo/schema';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
  connectToDevTools: true
})

cache.writeData({
  data: {
    welcomeMessage: "Welcome to my React & Apollo template ❤️"
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
