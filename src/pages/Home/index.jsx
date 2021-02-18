import React from 'react';
import {Container} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ListUsers from '../../views/ListUsers';

function Home() {

  let history = useHistory();
  
  return (
      <Container maxWidth="sm" className="margin-50">
        <h1 className="logo">A.R. Phoenix</h1>

        <ListUsers />

      </Container>
  );
}

export default Home;
