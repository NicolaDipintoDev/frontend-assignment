import React, { useState } from 'react';
import '../App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import SearchType from '../components/SearchType';
import GetSearchMethod from '../components/searchMethods/GetSearchMethod'
import PokemonsQuery from '../api/PokemonsQuery';
import LimitResults from '../components/LimitResults';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Pokemons = () => {

    const client = new ApolloClient({
        uri: 'http://localhost:4000',
    });

    const [searchType, setSearchType] = useState<string>('byName');
    const [query, setQuery] = useState<string>('');
    const [after, setAfter] = useState<string>('');
    const [prevAfter, setPrevAfter] = useState<string>('000');
    const [limit, setLimit] = useState<string | number | undefined>('10');


    return (
        <ApolloProvider client={client}>
            <div className="App">
                <p className='link'>
                    <Link to="/starters">
                        Who is the best starter ever?
                    </Link>
                </p>
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

                <LimitResults
                    setLimit={setLimit}
                />


                <PokemonsQuery
                    searchedValue={query}
                    searchType={searchType}
                    setQuery={setQuery}
                    after={after}
                    setAfter={setAfter}
                    prevAfter={prevAfter}
                    setPrevAfter={setPrevAfter}
                    limit={limit}
                />

            </div>
        </ApolloProvider>
    );
}

export default Pokemons;
