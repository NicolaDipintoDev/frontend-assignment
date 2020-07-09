import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Spin, Alert } from 'antd';

type Props = {
  searchedValue: string;
  searchType: string;
}
const Pokemons = ({ searchType, searchedValue }: Props) => {

  const getQuery = () => {
    const queryParams =
      searchType === 'byName' ?
        `q:"${searchedValue}"` :
        `type:"${searchedValue}"`;

    return gql`
    {
      pokemons(${queryParams}){ 
  
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
  }

  const { loading, error, data } = useQuery(getQuery());

  if (loading) return <Spin tip="Searching..." />;
  if (error) return <div className="Alert">
    <Alert message="Something gone wrong, retry" type="error" />;
      </div>
  return (

    <h1> Response ok </h1>

  );
}

export default Pokemons;