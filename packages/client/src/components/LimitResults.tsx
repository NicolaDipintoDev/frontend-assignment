import React from 'react';
import { InputNumber } from 'antd';

type Props = {
    setLimit: (value: string | number | undefined) => void;
}
const LimitResults = ({ setLimit }: Props) => {



    return <div className="limit">
        Max Pokemons result: {' '}
        <InputNumber min={1} max={151} defaultValue={10} onChange={(value: string | number | undefined) => setLimit(value)} />
    </div>
}

export default LimitResults;