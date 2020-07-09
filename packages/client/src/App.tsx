import React, { useState } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import searchType from './SearchType';
import SearchType from './SearchType';

const { Title } = Typography;


function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000',
  });

  const [searchType, setSearchType] = useState<string>('byName');
  const [query, setQuery] = useState<string>('');


  return (
    <ApolloProvider client={client}>
      <div className="App">

        <Title>
          Pokemon
          </Title>

        <SearchType
          searchType={searchType}
          setSearchType={setSearchType}
        />




      </div>
    </ApolloProvider>
  );
}

export default App;
