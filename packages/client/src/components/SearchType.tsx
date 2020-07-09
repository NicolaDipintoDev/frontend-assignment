import React from 'react';
import { Radio } from 'antd';

type Props = {
    setSearchType: (value: string) => void;
    searchType: string
}
const SearchType = ({ searchType, setSearchType }: Props) => {
    const onchange = (value: string) => {
        setSearchType(value);
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