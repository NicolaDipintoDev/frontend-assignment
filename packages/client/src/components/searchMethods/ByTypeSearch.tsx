import React from 'react';
import { Radio } from 'antd';
import Types from '../../constants/Types';

type Props = {
    setQuery: (value: string) => void;
    query: string
}
const ByTypeSearch = ({ query, setQuery }: Props) => {

    const onClick = (value: string) => {
        setQuery(value);
    }
    return <div className="searchBar">
        Choose type: {' '}
        <Radio.Group
            defaultValue={'Normal'}
            buttonStyle="solid"
            onChange={e => onClick(e.target.value)}>
            {Types.map((type: string) =>

                <Radio.Button key={type} value={type}>{type}</Radio.Button>

            )}
        </Radio.Group>
    </div>
}

export default ByTypeSearch;