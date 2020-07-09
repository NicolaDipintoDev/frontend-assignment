import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Spin, Alert, Table, Button } from 'antd';

type Props = {
  searchedValue: string;
  searchType: string;
}
const Pokemons = ({ searchType, searchedValue }: Props) => {

  const getQuery = () => {
    const queryParams =
      searchType === 'byName' ?
        `pokemons(q:"${searchedValue}"` :
        `pokemonsByType(type:"${searchedValue}"`;

    return gql`
    {
      ${queryParams}){ 
  
      edges{
        node{
          name
          types
          id
          classification
        }
      }
      pageInfo{
        hasNextPage
        endCursor
      }
    }}
    `
  };

  const { loading, error, data } = useQuery(getQuery());

  if (loading) return <Spin tip="Searching..." />;
  if (error) return <div className="Alert">
    <Alert message="Something gone wrong, retry" type="error" />;
      </div>

  type Edge = {
    node: Node;
  }
  type Node = {
    classification: string;
    id: string;
    name: string;
    types: Array<string>;
  }

  const result = data.pokemons.edges.map((edge: Edge) => {
    return { key: edge.node.id, name: edge.node.name, types: edge.node.types, classification: edge.node.classification }
  });

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

  return <div className='Table'>
    <Table dataSource={result} columns={getColumns()} pagination={false} />
    <div className="ButtonsWrapper">
      <span className="Buttons" ><Button type="primary" size='large' > PrevPage </ Button> </span>
      <span className="Buttons" ><Button type="primary" size='large' > nextPage </ Button> </span>
    </div>
  </div>
}

export default Pokemons;