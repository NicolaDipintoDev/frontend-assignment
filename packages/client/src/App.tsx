import React from 'react';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Typography, Radio } from 'antd';
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
        Search by: {' '}
        <Radio.Group
          defaultValue="byName"
          buttonStyle="solid"
          onChange={value => () => console.log(value)}>
          <Radio.Button value="byName">Name</Radio.Button>
          <Radio.Button value="byType">Type</Radio.Button>
        </Radio.Group>
      </div>
    </ApolloProvider>
  );
}

export default App;
