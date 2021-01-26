import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Music = () => (
  <Query
    query={gql`
     
      {
        id
      name
    songs {
    genre
    composer 
    year
  }
  
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
       console.log(data);
      
    

      return data.map(({ id, name, }) => (
        <div key={id}>
          <p>{`${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Music;