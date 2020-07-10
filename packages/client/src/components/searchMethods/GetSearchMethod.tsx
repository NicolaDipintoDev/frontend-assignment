import React from 'react';
import SearchBar from './ByNameSearch';
import ByTypeSearch from './ByTypeSearch'

type Props = {
    method: string;
    setQuery: (value: string) => void;
    query: string;
}
const GetSearchMethod = ({ method, query, setQuery }: Props) => {
    let Component = method === 'byName' ?
        SearchBar : ByTypeSearch;

    return <Component
        query={query}
        setQuery={setQuery}
    />

}

export default GetSearchMethod;