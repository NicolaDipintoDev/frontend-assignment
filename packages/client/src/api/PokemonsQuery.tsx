import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Spin, Alert, Button } from 'antd';
import PokemonsList from '../components/pokemons/PokemonsList';
import NavButtons from '../components/pokemons/NavButtons'

type Props = {
  searchedValue: string;
  searchType: string;
  setQuery: (value: string) => void;
}
const Pokemons = ({ searchType, searchedValue, setQuery }: Props) => {

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

  const result: Array<Node> = data.pokemons.edges.map((edge: Edge) => {
    return { key: edge.node.id, name: edge.node.name, types: edge.node.types, classification: edge.node.classification }
  });

  return <div className='Table'>
    <PokemonsList pokemons={result} />
    <NavButtons
      HasNextPage={data.pokemons.pageInfo.hasNextPage}
      HasPrevPage={false}
      setQuery={setQuery}
    />
  </div>
}

export default Pokemons;