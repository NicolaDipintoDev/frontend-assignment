import React, { useState } from 'react';
import '../App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import SearchType from '../components/SearchType';
import GetSearchMethod from '../components/searchMethods/GetSearchMethod'
import PokemonsQuery from '../api/PokemonsQuery';

const { Title } = Typography;

const Pokemons = () => {

    const client = new ApolloClient({
        uri: 'http://localhost:4000',
    });

    const [searchType, setSearchType] = useState<string>('byName');
    const [query, setQuery] = useState<string>('');
    const [after, setAfter] = useState<string>('');
    const [prevAfter, setPrevAfter] = useState<string>('000');


    return (
        <ApolloProvider client={client}>
            <div className="App">

                <Title>
                    Pokemon
            </Title>

                <SearchType
                    searchType={searchType}
                    setSearchType={setSearchType}
                    setQuery={setQuery}
                />

                <GetSearchMethod
                    method={searchType}
                    query={query}
                    setQuery={setQuery}
                />

                <PokemonsQuery
                    searchedValue={query}
                    searchType={searchType}
                    setQuery={setQuery}
                    after={after}
                    setAfter={setAfter}
                    prevAfter={prevAfter}
                    setPrevAfter={setPrevAfter}
                />

            </div>
        </ApolloProvider>
    );
}

export default Pokemons;
