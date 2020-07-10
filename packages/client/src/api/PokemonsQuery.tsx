import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Spin, Alert } from 'antd';
import PokemonsList from '../components/pokemons/PokemonsList';
import NavButtons from '../components/pokemons/NavButtons'

type Props = {
  searchedValue: string;
  searchType: string;
  after: string;
  setAfter: (value: string) => void;
  prevAfter: string;
  setPrevAfter: (value: string) => void;
  limit: string | number | undefined;

}
const Pokemons = ({
  searchType,
  searchedValue,
  after,
  setAfter,
  prevAfter,
  setPrevAfter,
  limit
}: Props) => {

  const getQuery = () => {

    let query = `"${searchedValue}"`;
    if (after) {
      query = query + `, after:"${after}"`;
    }

    if (limit) {
      query = query + `, limit:${limit}`;
    }

    const queryParams =
      searchType === 'byName' ?
        `pokemons(q:${query}` :
        `pokemonsByType(type:${query}`;

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
    <Alert message="Something gone wrong, retry" type="error" />
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

  const pokemonaQuery = searchType === 'byName' ? data.pokemons : data.pokemonsByType;
  const result: Array<Node> = pokemonaQuery.edges.map((edge: Edge) => {
    return { key: edge.node.id, name: edge.node.name, types: edge.node.types, classification: edge.node.classification }
  });

  return <div className='Table'>
    <PokemonsList pokemons={result} />
    <NavButtons
      HasNextPage={pokemonaQuery.pageInfo.hasNextPage}
      endCursor={pokemonaQuery.pageInfo.endCursor}
      setAfter={setAfter}
      setPrevAfter={setPrevAfter}
      prevAfter={prevAfter}
    />
  </div>
}

export default Pokemons;