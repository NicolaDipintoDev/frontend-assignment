import React, { useState } from 'react';
import { Input } from 'antd';

type Props = {
    setQuery: (value: string) => void;
    query: string
}
const SearchBar = ({ query, setQuery }: Props) => {

    const searching = (value: string) => {
        setQuery(value);
    }
    return <div className="searchBar">
        <Input
            type='text'
            placeholder="Pokemon name"
            onChange={value => searching(value.target.value)}
            value={query} />
    </div>
}

export default SearchBar;