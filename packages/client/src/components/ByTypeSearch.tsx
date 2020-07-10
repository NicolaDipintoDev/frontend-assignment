import React from 'react';
import { Radio } from 'antd';

type Props = {
    setQuery: (value: string) => void;
    query: string
}
const ByTypeSearch = ({ query, setQuery }: Props) => {

    const onClick = (value: string) => {
        setQuery(value);
    }
    const types = [
        'Normal',
        'Fire',
        'Grass',
        'Water',
        'Poison',
        "Electric",
        "Fighting",
        "Fairy",
        "Ice",
        "Flying",
        "Psychic",
        "Bug",
        "Steel",
        "Ground",
        "Rock",
        "Ghost",
        "Dragon"];
    return <div className="searchBar">
        Choose type: {' '}
        <Radio.Group
            defaultValue={'Normal'}
            buttonStyle="solid"
            onChange={e => onClick(e.target.value)}>
            {types.map(type =>

                <Radio.Button key={type} value={type}>{type}</Radio.Button>

            )}
        </Radio.Group>
    </div>
}

export default ByTypeSearch;