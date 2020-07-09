import React, { useState } from 'react';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Typography, Radio } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;


function App() {

  const [searchType, setSearchType] = useState<string>('byName');
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Title>
          Pokemon
          </Title>
        Search by: {' '}
        <Radio.Group
          defaultValue={searchType}
          buttonStyle="solid"
          onChange={e => setSearchType(e.target.value)}>
          <Radio.Button value="byName">Name</Radio.Button>
          <Radio.Button value="byType">Type</Radio.Button>
        </Radio.Group>
      </div>
    </ApolloProvider>
  );
}

export default App;
