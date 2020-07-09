import React from 'react';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;


function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000',
  });

  /* client
    .query({
      query: gql`
    {
      pokemons(q:"${'b'}"){ 
  
      edges{
        node{
          name
          types
          id
          classification
        }
      }
      pageInfo{
        hasNextPage
        endCursor
      }
    }}
    `
    }).then(result => console.log(result)); */

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Title>
          Pokemon
          </Title>
      </div>
    </ApolloProvider>
  );
}

export default App;
