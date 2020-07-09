import React from 'react';
import { Table } from 'antd';

type Props = {
    pokemons: Array<Object>;
    hasNextPage: boolean;
    endCursor: string;
}
const Pokemons = ({ pokemons, hasNextPage, endCursor }: Props) => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Classification',
            dataIndex: 'Classification',
            key: 'Classification',
        },
    ];

    return <div>
        <Table dataSource={pokemons} columns={columns} />;
    </div>
}

export default Pokemons;