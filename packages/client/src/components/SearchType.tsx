import React from 'react';
import { Radio } from 'antd';

type Props = {
    setSearchType: (value: string) => void;
    setQuery: (value: string) => void;
    searchType: string
}
const SearchType = ({ searchType, setSearchType, setQuery }: Props) => {
    const onchange = (value: string) => {
        setSearchType(value);
        setQuery(value === 'byName' ? '' : 'Normal');
    }


    return <div>
        Search by: {' '}
        <Radio.Group
            defaultValue={searchType}
            buttonStyle="solid"
            onChange={e => onchange(e.target.value)}>
            <Radio.Button value="byName">Name</Radio.Button>
            <Radio.Button value="byType">Type</Radio.Button>
        </Radio.Group>
    </div>
}

export default SearchType;