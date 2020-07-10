import React from 'react';
import { Table } from 'antd';

type Node = {
    classification: string;
    id: string;
    name: string;
    types: Array<string>;
}

type Props = {
    pokemons: Array<Node>
}
const PokemonsList = ({ pokemons }: Props) => {

    const getColumns = () => [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Type',
            dataIndex: 'types',
            key: 'types',
            render: (types: Array<string>) => (
                <>
                    {types.map((type: string) => {
                        return <span key={type}>{type + ' '}</span>
                    })}
                </>
            ),
        },
        {
            title: 'Classification',
            dataIndex: 'classification',
            key: 'classification',
        },
    ];

    return <div>
        <Table dataSource={pokemons} columns={getColumns()} pagination={false} />
    </div>
}

export default PokemonsList;